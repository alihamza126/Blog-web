import siteMetadata from "../utils/SiteMetaData";


export const metadata={
  title:'Privacy Policy',
  description:"read our privacy policy to clear understanding"
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <main className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
        <p className="mb-4 text-gray-600">
          This Privacy Policy explains how we collect, use, and disclose your personal information. By using our service, you agree to the terms outlined in this policy.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Information Collection</h2>
          <p className="mb-4 text-gray-600">
            We don't collect any type of data.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Personal Identification Information</li>
            <li>Log Data (browser type, and usage data)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Use of Information</h2>
          <p className="mb-4 text-gray-600">
            Also we don't collect any type of information.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Provide and maintain our service</li>
            <li>Improve and personalize our service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Data Security</h2>
          <p className="mb-4 text-gray-600">
          Pinterest video downloader 100% safe tool. There's no security weakness or spam link because all videos, image and gif .etc get from official 
            <a target='__blank' className='text-blue-600 underline ms-1' href='https://www.pinterest.com/'>Pinterest</a> server .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Changes to This Policy</h2>
          <p className="mb-4 text-gray-600">
            In future there's no change in this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at <a href={`mailto:${siteMetadata.email}`} className="text-blue-600 hover:underline">{siteMetadata.email}</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
