import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";

const OnlineSupport = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data); 
      };
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Online Support | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-banner">
                <div className="md:container mx-auto px-2 md:py-10">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-white lg:text-3xl font-semibold ">Online Support</h1>
                        <p className="text-gray-200 mt-4 text-xs lg:text-[1rem] leading-relaxed">Please fill out the following form with details</p>
                        <p className="text-gray-200 mt-4 text-xs lg:text-[1rem] leading-relaxed">We will review your request and follow up with you as soon as possible.</p>
                    </div>
                </div> 
            </div>
            <div className="container mx-auto">
                <h2 className="text-center text-3xl font-bold my-8">Service Support Request - Gadget Heaven</h2>
            </div>
            <div className="container mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Type Your Full Name."
              {...register('fullName',
                { required: 'Full Name is required',
                  minLength:{value:4, message:'Character should be at least 3'},
                  maxLength:{value:8, message:'Max Character should be 8'}, 
                 })}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700">
              Phone No.<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Type Your Mobile No."
              {...register('phoneNumber', {
                required: 'Phone Number is required',
                minLength:{value:11, message:'Phone Number should be at least 11'},
                maxLength:{value:11, message:'Phone Number should not be over 11'},
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Phone Number must contain only numbers',
                },
              })}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="emailAddress" className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              placeholder="Type Your Email Address."
              {...register('emailAddress', {
                required: 'Email Address is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Enter a valid email address',
                },
              })}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
            {errors.emailAddress && <p className="text-red-500 text-sm">{errors.emailAddress.message}</p>}
          </div>
          <div>
            <label htmlFor="invoiceNumber" className="block text-sm font-semibold text-gray-700">
              Invoice No.<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="invoiceNumber"
              placeholder="Invoice No."
              {...register('invoiceNumber', { required: 'Invoice Number is required' })}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
            {errors.invoiceNumber && <p className="text-red-500 text-sm">{errors.invoiceNumber.message}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Type Your Problem Subject"
            {...register('subject', { required: 'Subject is required' })}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
          {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
        </div>
        <div>
          <label htmlFor="details" className="block text-sm font-semibold text-gray-700">
            Details<span className="text-red-500">*</span>
          </label>
          <textarea
            id="details"
            placeholder="Write Your Problem In Details."
            rows="4"
            {...register('details', { required: 'Details are required' })}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          ></textarea>
          {errors.details && <p className="text-red-500 text-sm">{errors.details.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-banner text-white font-semibold rounded"
        >
          Submit Your Request
        </button>
      </form>
            </div>
        </div>
        
    );
};

export default OnlineSupport;