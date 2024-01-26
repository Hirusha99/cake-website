import './css/Contact.css'
const Contact = () => {
  return (
    <>
      <div style={{paddingTop: window.location.href.includes('contact') ? '100px' : '0px'}} className='text-center global'>
        <h1>Contact us</h1>
      </div>
      <div className='al'>
        <dl className="row">
          <dt className="col-sm-3">Address</dt>
          <dd className="col-sm-9">
            123 Main Street, Cityville, State 12345, Country
          </dd>

          <dt className="col-sm-3">Email</dt>
          <dd className="col-sm-9">
            john.doe@example.com.
          </dd>

          <dt className="col-sm-3">Telephone</dt>
          <dd className="col-sm-9 global">
          011 6859635 / 
            011 2888888
          </dd>

         
        </dl>
      </div>
    </>
  );
};

export default Contact;
