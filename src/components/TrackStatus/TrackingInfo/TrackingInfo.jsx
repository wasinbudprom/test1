import Map from '../Map/Map';
import './TrackingInfo.css';

const TrackingInfo = () => {
  // Sample data
  const trackingInfo = {
    trackingNumber: 'KG32200L312232-4GF',
    status: 'In Transit',
    departure: '22.02.21 16:40 PM',
    arrival: '24.02.21 12:30 PM',
    customer: 'Ella Doer',
    price: 154.5,
    description: 'Clothes',
    weight: '12 kg',
    driver: 'John Green',
  };

  return (
    <div className="tracking-info">
      <div className="tracking-details">
        <div className="tracking-number">
          <span>Tracking Number/หมายเลขติดตาม:</span>
          <span>{trackingInfo.trackingNumber}</span>
        </div>
        <div className="tracking-status">
          <span>Status/สถานะ:</span>
          <span>{trackingInfo.status}</span>
        </div>
        <div className="departure-arrival">
          <div>
            <span>Departure/การออกเดินทาง:</span>
            <span>{trackingInfo.departure}</span>
          </div>
          <div>
            <span>Arrival/การมาถึง:</span>
            <span>{trackingInfo.arrival}</span>
          </div>
        </div>
        <div className="customer-details">
          <div>
            <span>Customer/ลูกค้า:</span>
            <span>{trackingInfo.customer}</span>
          </div>
          <div>
            <span>Price/ราคา:</span>
            <span>${trackingInfo.price}</span>
          </div>
          <div>
            <span>Description/คำอธิบาย:</span>
            <span>{trackingInfo.description}</span>
          </div>
          <div>
            <span>Weight/ohesoyd:</span>
            <span>{trackingInfo.weight}</span>
          </div>
        </div>
        <div className="driver-info">
          <img src="https://i.pinimg.com/564x/9a/09/82/9a0982270e909377175f170267286422.jpg" alt="Driver" />
          <span>{trackingInfo.driver}</span>
        </div>
      </div>
      <Map /> {/* แสดง Map component */}
    </div>
  );
};

export default TrackingInfo;