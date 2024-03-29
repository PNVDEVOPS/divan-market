import { useSelector } from 'react-redux';
import {
  useAddGoodsInBasketMutation,
  useGetUsersQuery,
} from '../../../redux/goodsApi';
import Spinner from '../../Spinner/Spinner';
import {
  errorMessageLogin,
  successAddInBasket,
  alreadyInBasket,
} from '../../../utils/list';
import Order from '../AddButton/Order';

const AddOrder = ({ text, id, goods }) => {
  const auth = useSelector((state) => state.users.auth);
  const authCustomer = useSelector((state) => state.users.authCustomer);
  const user = useSelector((state) => state.users.lkUser);

  const { data = [] } = useGetUsersQuery(user.id);
  // let result = data.find((item) => item.id == user.id);

  const [addProductInBasket, { isLoading }] = useAddGoodsInBasketMutation();

  const handleAddProductInBasket = async () => {
    if (auth === false && authCustomer === false) {
      errorMessageLogin();
    }
    if (auth != false || authCustomer != false) {
      let userTaget = data.find((item) => item.id == user.id);
      let productNumber = userTaget.basket.item.find(
        (item) => item.id == goods.id
      );
      if (productNumber === undefined) {
        successAddInBasket();
        let result = {
          id: goods.id,
          title: goods.title,
          img: goods.images[0],
          price: goods.price,
          col: 1,
        };
        let previosItems = userTaget.basket.item;
        let arr = [];
        previosItems.forEach((item) => {
          arr.push(item);
        });
        arr.push(result);
        let generalSum = userTaget.GeneralsumInBasket + goods.price;
        await addProductInBasket({
          id: userTaget.id,
          data: arr,
          sum: generalSum,
        }).unwrap();
      } else {
        alreadyInBasket();
      }
    }
  };

  if (isLoading) return <Spinner />;

  return <Order onClick={handleAddProductInBasket} text={'Заказать'}/>;
};

export default AddOrder;
