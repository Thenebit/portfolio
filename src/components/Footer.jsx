
const Footer = () => {
    return (
        <>
          <div className="text-white border-t-4 border-gray-500">
            <span className="text-xl flex justify-center w-full p-2">
                Made with &#10084; by Samuel @{ new Date().getFullYear() }
            </span>
          </div>
        </>
    );
}
export default Footer;