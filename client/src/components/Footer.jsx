function Footer() {
  return (
    <div style={{ backgroundColor: "#111827" }}>
      <div className="mx-30 md:flex mx-5 md:space-x-80">
        <div className="py-10 ">
          <div className="flex space-x-2 ">
            <img
              className="w-8 h-8 border rounded"
              src="/assets/logo1.png"
              alt="TeamUp"
            />
            <h1 className="text-white text-xl font-bold">TeamUp</h1>
          </div>
          <div className="mt-3">
            <p className="text-gray-400 text-sm">
              Empoweing teams to collaborate <br />
              smarter and achieve more together.
            </p>
          </div>
        </div>
        <div className="py-10 ">
          <h1 className="text-white font-bold">Products</h1>
          <ul className="text-gray-400">
            <li>Features</li>
            <li>Pricing</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="py-10">
          <h1 className="text-white font-bold">Company</h1>
          <ul className="text-gray-400">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="py-10">
          <h1 className="text-white font-bold">Legal</h1>
          <ul className="text-gray-400">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
