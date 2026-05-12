import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import BlogIndex from './BlogIndex'
import BlogPost from './BlogPost'
import './index.css'

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">Texas Insurance Guide</h1>
            <p className="text-sm text-gray-500">Your essential guide to navigating Texas insurance with confidence.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/blog" className="hidden sm:inline text-blue-700 font-semibold hover:text-blue-900">Blog</Link>
            <a href="tel:800-616-1418" className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold transition text-sm">
              📞 800-616-1418
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Texas Insurance Guide</h2>
          <p className="text-xl text-blue-200 mb-6">Your trusted source for Texas insurance news, laws, and resources</p>
          <p className="text-blue-300 text-lg mb-10 max-w-2xl mx-auto">We help Texas homeowners and drivers navigate hail damage, tornado risk, Gulf Coast hurricane exposure, and high wildfire risk in West Texas — so you can make informed decisions about your coverage. No jargon, no pressure.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#overview" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-xl text-lg transition">
              📖 Explore the Guide
            </a>
            <a href="#tips" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-xl text-lg transition">
              💡 Texas Insurance Tips
            </a>
          </div>
        </div>
      </section>

      {/* State Overview */}
      <section id="overview" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Texas Insurance Overview</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">Texas, with its diverse geography and population, presents a unique insurance landscape. From Gulf Coast hurricanes to expansive rural areas, residents face distinct risks, making comprehensive coverage crucial. The state's insurance market is robust, featuring numerous carriers offering a wide array of products.</p><p className="text-gray-700 mb-4">The Texas Department of Insurance (TDI) regulates the industry, ensuring fair practices and consumer protection. Understanding the local regulations and available options is key to securing adequate protection for your home, vehicle, and health. This guide aims to demystify Texas insurance, helping you make informed decisions.</p><p className="text-gray-700 mb-4">Whether you're a new resident or looking to review your current policies, having the right insurance in Texas isn't just a legal requirement for some types of coverage, but a vital financial safeguard against unforeseen events. Proactive planning can save you significant costs and stress in the long run.</p>
          </div>
        </div>
      </section>

      {/* Top Carriers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Top Insurance Carriers in Texas</h2>
          <p className="text-center text-gray-600 mb-10">Leading insurance companies serving Texas residents</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">State Farm</h3>
          <p className="text-gray-600">A leading insurer in Texas, State Farm offers extensive auto, home, and life insurance options, known for its widespread agent network and local presence.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Allstate</h3>
          <p className="text-gray-600">Allstate provides a broad range of insurance products in Texas, including auto, home, and renters insurance, often with customizable policies and discounts.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Progressive</h3>
          <p className="text-gray-600">Progressive is a popular choice for Texas drivers, offering competitive rates on auto insurance and a variety of coverage options, including usage-based programs.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">GEICO</h3>
          <p className="text-gray-600">Known for its direct-to-consumer model, GEICO offers affordable auto, motorcycle, and homeowners insurance policies to Texas residents.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Farmers Insurance</h3>
          <p className="text-gray-600">Farmers Insurance has a strong presence in Texas, providing personalized insurance solutions for auto, home, and business owners through local agents.</p>
        </div>
          </div>
        </div>
      </section>

      {/* Laws & Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Texas Insurance Laws & Requirements</h2>
          <p className="text-gray-600 mb-8">Stay compliant with Texas's insurance regulations</p>
          <div className="space-y-6">
            
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Texas Minimum Auto Insurance Requirements</h4>
            <p className="text-gray-600 text-sm">Mandates 30/60/25 liability coverage (bodily injury per person/per accident, property damage) for all registered vehicles.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Homeowners Insurance Disclosure Requirements</h4>
            <p className="text-gray-600 text-sm">Insurers must disclose certain information to homeowners, including windstorm/hail deductibles and coverage options, especially in coastal areas.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Texas Fair Plan for Property Insurance</h4>
            <p className="text-gray-600 text-sm">Provides basic property insurance to eligible Texans who cannot obtain coverage in the voluntary market, often due to high-risk locations.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Texas Windstorm Insurance Association (TWIA)</h4>
            <p className="text-gray-600 text-sm">Offers windstorm and hail coverage for eligible properties in designated coastal counties and parts of Harris County.</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-700 text-xl">⚖️</span>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Prompt Pay Law for Claims</h4>
            <p className="text-gray-600 text-sm">Requires insurers to acknowledge, investigate, and pay or deny claims within specific timeframes to protect consumers.</p>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Recent News (Blog Preview) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900">Recent News & Articles</h2>
            <Link to="/blog" className="text-blue-700 font-semibold hover:text-blue-900">View all →</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            
        <a href="/blog/understanding-texas-auto-insurance-minimums" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2024-11-01</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Understanding Texas Auto Insurance Minimums: Are You Truly Protected?</h3>
          <p className="text-gray-600 text-sm">Texas law requires minimum auto insurance, but is it enough? Explore what 30/60/25 coverage means and why you might need more.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
        <a href="/blog/navigating-windstorm-hail-insurance-texas" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2025-01-20</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Navigating Windstorm & Hail Insurance in Texas: Coastal vs. Inland</h3>
          <p className="text-gray-600 text-sm">Texas weather demands specific coverage. Learn how windstorm and hail insurance works, especially in high-risk coastal and inland areas.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
        <a href="/blog/the-texas-fair-plan-when-private-insurance-isnt-an-option" className="block bg-white rounded-xl shadow hover:shadow-md transition p-6 border border-gray-100">
          <p className="text-sm text-blue-600 mb-2">2024-09-15</p>
          <h3 className="text-lg font-bold text-gray-900 mb-2">The Texas FAIR Plan: When Private Insurance Isn't an Option</h3>
          <p className="text-gray-600 text-sm">Discover how the Texas FAIR Plan provides essential property insurance for those unable to secure coverage in the voluntary market.</p>
          <span className="inline-block mt-3 text-blue-700 font-semibold text-sm">Read more →</span>
        </a>
          </div>
        </div>
      </section>

      {/* Insurance Tips */}
      <section id="tips" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Insurance Tips for Texas Residents</h2>
          <div className="space-y-4">
            
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
          <p className="text-gray-700">Always get multiple quotes for auto and home insurance; rates can vary significantly between Texas providers.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
          <p className="text-gray-700">Understand your deductible options for windstorm and hail damage, especially if living in coastal or storm-prone regions.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
          <p className="text-gray-700">Consider adding flood insurance; standard homeowners policies in Texas do not cover flood damage.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
          <p className="text-gray-700">Bundle your policies (auto, home, renters) with the same insurer for potential multi-policy discounts.</p>
        </div>
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
          <p className="text-gray-700">Review your coverage annually, particularly after major life events or if you've made significant home improvements.</p>
        </div>
          </div>
        </div>
      </section>

      {/* Quote CTA — appears after all value content */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions About Your Coverage?</h2>
          <p className="text-blue-200 text-xl mb-4">If you've read through the guide and want a second opinion on your current policy — or just want to see what else is available in Texas — our local agents are happy to help. No pressure, no obligation.</p>
          <p className="text-blue-300 mb-8">We work with 150+ carriers across the country, so we'll tell you honestly what's worth it and what's not.</p>
          <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer"
             className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-10 py-5 rounded-xl text-xl transition transform hover:scale-105 shadow-lg">
            🚀 Get a Free, No-Obligation Quote
          </a>
          <p className="mt-4 text-blue-200 text-sm">Takes 2 minutes · Local agents · 150+ carriers compared</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Texas Insurance Guide</h3>
              <p className="text-sm">Your essential guide to navigating Texas insurance with confidence.</p>
              <p className="mt-3 text-sm">📞 <a href="tel:800-616-1418" className="hover:text-white">800-616-1418</a></p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-3">Also from Tomlinson & Co</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://tomlinsonandco.com" className="hover:text-white transition">Tomlinson & Co Insurance</a></li>
                <li><a href="https://hoinsurance.com" className="hover:text-white transition">HOInsurance.com — FL Home Specialists</a></li>
                <li><a href="https://flawc.com" className="hover:text-white transition">FLAWC.com — Florida Workers Comp</a></li>
                <li><a href="https://easycommercialinsurance.com" className="hover:text-white transition">EasyCommercialInsurance.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} Texas Insurance Guide — A Tomlinson & Co Resource</p>
            <p className="mt-1 text-xs">Information provided for educational purposes only. Contact a licensed agent for personalized advice.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
