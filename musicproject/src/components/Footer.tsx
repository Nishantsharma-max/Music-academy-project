
function Footer() {
  return (
<footer className="bg-black text-gray-500 py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* About Section */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-3">About Us</h3>
      <p>Discover the best music, latest albums, and trending artists. Your gateway to an endless world of sound.</p>
    </div>

    {/* Support */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-3">Support</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">Help Center</a></li>
        <li><a href="#" className="hover:text-white">Subscription Plans</a></li>
        <li><a href="#" className="hover:text-white">Report an Issue</a></li>
        <li><a href="#" className="hover:text-white">FAQs</a></li>
      </ul>
    </div>

    {/* Explore */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-3">Explore</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-white">New Releases</a></li>
        <li><a href="#" className="hover:text-white">Top Charts</a></li>
        <li><a href="#" className="hover:text-white">Playlists</a></li>
        <li><a href="#" className="hover:text-white">Live Concerts</a></li>
      </ul>
    </div>

    {/* Social Media */}
    <div>
      <h3 className="text-white text-lg font-semibold mb-3">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-white">YouTube</a>
        <a href="#" className="hover:text-white">Instagram</a>
        <a href="#" className="hover:text-white">Twitter</a>
        <a href="#" className="hover:text-white">Facebook</a>
      </div>
    </div>

  </div>
  <p className="text-center mt-8">2024 music school.All right reserved.</p>
</footer>
  )
}

export default Footer