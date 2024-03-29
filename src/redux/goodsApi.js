import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

function providesList(resultsWithIds, tagType) {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }];
}

export const goodsApi = createApi({
  reducerPath: 'goodsApi',
  tagTypes: ['Goods', 'User', 'Categories', 'Banners'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getGoods: build.query({
      query: (body) =>
        body.search == ''
          ? `/products?category_like=${body.category}&_start=0&_end=${body.limit}`
          : `/products?title_like=${body.search}`,
      providesTags: (result) => providesList(result, 'Goods'),
    }),

    getSingleGoods: build.query({
      query: (id) => `/products/${id}`,
      providesTags: (result) =>
        result ? [result, { type: 'Goods' }] : [{ type: 'Goods' }],
    }),

    getBanners: build.query({
      query: (banners) => `/banners/${banners}`,
      providesTags: (result) =>
        result ? [result, { type: 'Banners' }] : [{ type: 'Banners' }],
    }),

    changeSingleGoods: build.mutation({
      query: (body) => ({
        url: `/products/${body.idGoods}`,
        method: 'PATCH',
        body: {
          title: body.newTitle,
          price: body.newPrice,
          description: body.newDescription,
          oldprice: body.newOldPrice,
          order:  body.newOrder,
          discount: body.newDiscount,
          orderdiscount: body.newOrderDiscount,
          nalichie: body.newNalichie,
          carcas: body.newCarcas,
          mech: body.newMech,
          inside: body.newInside,
          gab: body.newGab,
          sleep: body.newSleep,
          images: body.newImages
        },
      }),
      invalidatesTags: [{ type: 'Goods' }],
    }),

    addGoods: build.mutation({
      query: (body) => ({
        url: `/products/`,
        method: 'POST',
        body: {
          title: body.title,
          price: body.price,
          oldprice: body.oldprice,
          description: body.description,
          category: body.category,
          images: body.images,
          order:  body.order,
          discount: body.discount,
          orderdiscount: body.orderdiscount,
          nalichie: body.nalichie,
          carcas: body.carcas,
          mech: body.mech,
          inside: body.inside,
          gab: body.gab,
          sleep: body.sleep
        },
      }),
      invalidatesTags: [{ type: 'Goods' }],
    }),

    deleteGoods: build.mutation({
      query: (body) => ({
        url: `/products/${body.idGoods}`,
        method: 'DELETE',
        body: {
          title: body.title,
          price: body.price,
          oldprice: body.oldprice,
          description: body.description,
          category: body.category,
          images: body.images,
          order:  body.order,
          discount: body.discount,
          orderdiscount: body.orderdiscount,
          nalichie: body.nalichie,
          carcas: body.carcas,
          mech: body.mech,
          inside: body.inside,
          gab: body.gab,
          sleep: body.sleep
        },
      }),
      invalidatesTags: [{ type: 'Goods' }],
    }),

    getCategory: build.query({
      query: () => `/categories`,
      providesTags: (result) => providesList(result, 'Categories'),
    }),

    addCategories: build.mutation({
      query: (body) => ({
        url: `/categories`,
        method: 'POST',
        body: {
          name: body.name,
          visibleName: body.visibleName,
          image: body.image,
        },
      }),
      invalidatesTags: [{ type: 'Categories' }],
    }),

    getUsers: build.query({
      query: () => `/users`,
      providesTags: (result) => providesList(result, 'User'),
    }),

    getSingleUser: build.query({
      query: (id) => `/users/${id}`,
      providesTags: (result) =>
        result ? [result, { type: 'User' }] : [{ type: 'User' }],
    }),

    addUser: build.mutation({
      query: (body) => ({
        url: `/users`,
        method: 'POST',
        body: {
          email: body.email,
          password: body.password,
          name: body.name,
          role: body.role,
          avatar: body.avatar,
          basket: {
          item: []
          },
          history: {}
        },
      }),
      // invalidatesTags: (result, error, arg) => [{type: 'User', id: arg.id}]
      invalidatesTags: [{ type: 'User' }],
    }),

    addGoodsInBasket: build.mutation({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PATCH',
        body: {
          basket: {
            item: body.data,
          },
          GeneralsumInBasket: body.sum,
        },
      }),
      // invalidatesTags: (result, error, arg) => [{type: 'User', id: arg.id}]
      invalidatesTags: [{ type: 'User' }],
    }),

    removeGoodsInBasket: build.mutation({
      query: (body) => ({
        url: `/users/${body.id}`,
        method: 'PATCH',
        body: {
          basket: {
            item: body.data,
          },
          GeneralsumInBasket: body.sum,
        },
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    incrementGoodsInBasket: build.mutation({
      query: (body) => ({
        url: `/users/${body.idUser}`,
        method: 'PATCH',
        body: {
          basket: {
            item: body.item,
          },
          GeneralsumInBasket: body.generalSum,
        },
      }),
      invalidatesTags: [{ type: 'User' }],
    }),

    confirmDiliveryBasket: build.mutation({
      query: (body) => ({
        url: `/users/${body.idUser}`,
        method: 'PATCH',
        body: {
          basket: {
            item: body.item,
          },
          GeneralsumInBasket: body.generalSum,
          history: body.history,
          phone: body.phone,
          adress: body.adress,
          pod: body.pod,
          floor: body.floor,
          kv: body.kv,
          sborka: body.sborka,
          com: body.com
        },
      }),
      invalidatesTags: [{ type: 'User' }],
    }),
  }),
});

export const {
  useGetGoodsQuery,
  useGetSingleGoodsQuery,
  useGetUsersQuery,
  useGetSingleUserQuery,
  useAddGoodsInBasketMutation,
  useRemoveGoodsInBasketMutation,
  useIncrementGoodsInBasketMutation,
  useConfirmDiliveryBasketMutation,
  useGetCategoryQuery,
  useChangeSingleGoodsMutation,
  useAddCategoriesMutation,
  useAddGoodsMutation,
  useDeleteGoodsMutation,
  useAddUserMutation,
  useGetBannersQuery
} = goodsApi;
