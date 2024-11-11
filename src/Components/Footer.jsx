import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center text-center p-4 mt-6">
                <div className="space-y-2">
                    <Link to='/'><h2 className="font-bold text-2xl">Gadget Heaven</h2></Link>
                    <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
                </div>
            </div>
            <hr className="w-2/3 mt-4 container mx-auto" />
            <div className="flex flex-row justify-evenly items-center text-neutral-content p-10 container mx-auto">
                <div className="flex flex-col">
                    <h6 className="text-xl font-bold text-gray-800 pb-4">Services</h6>
                    <a className="link link-hover text-gray-500">Branding</a>
                    <a className="link link-hover text-gray-500">Design</a>
                    <a className="link link-hover text-gray-500">Marketing</a>
                    <a className="link link-hover text-gray-500">Advertisement</a>
                </div>
                <div className="flex flex-col">
                    <h6 className="text-xl font-bold text-gray-800 pb-4">Company</h6>
                    <a className="link link-hover text-gray-500">About us</a>
                    <a className="link link-hover text-gray-500">Contact</a>
                    <a className="link link-hover text-gray-500">Jobs</a>
                    <a className="link link-hover text-gray-500">Press kit</a>
                </div>
                <div className="flex flex-col">
                    <h6 className="text-xl font-bold text-gray-800 pb-4">Legal</h6>
                    <a className="link link-hover text-gray-500">Terms of use</a>
                    <a className="link link-hover text-gray-500">Privacy policy</a>
                    <a className="link link-hover text-gray-500">Cookie policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;