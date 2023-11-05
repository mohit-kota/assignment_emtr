export default function Footer() {
  return (
    <footer className="bg-blue-900 text-black py-8 rounded-lg">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h5 className="font-bold uppercase mb-2">Resources</h5>
          <ul className="list-none">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
          <h5 className="font-bold uppercase mb-2">Company</h5>
          <ul className="list-none">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        {/* Other footer links */}
      </div>

      
    </footer>
  );
}
