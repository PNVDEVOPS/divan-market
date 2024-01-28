import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FormDelivery from './FormDelivery';
import SelfDelivery from './SelfDelivery'


function DeliveryTab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3 font-semibold text-[18px] text-neutral-900"
      justify
    >
      <Tab eventKey="home" title="Доставка">
        <FormDelivery></FormDelivery>
      </Tab>
      <Tab eventKey="profile" title="Самовывоз" className='flex-col'>
      <div className='w-fit text-[20px] font-semibold'>Адрес нашего склада:</div>
        <SelfDelivery className='w-[50vw]'></SelfDelivery>
       
      </Tab>
    </Tabs>
  );
}

export default DeliveryTab;