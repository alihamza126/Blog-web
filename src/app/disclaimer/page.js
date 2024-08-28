import siteMetadata from "../utils/SiteMetaData";


export const metadata={
    title:'Disclamer',
    description:"Check out our DCMA about the website"
  }

export default function DMCA() {
    return (
        <div className="bg-gray-100 min-h-screen py-10 ">
            <main className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">DMCA Disclaimer</h1>
                <p className="mb-4 text-gray-600">
                    This Digital Millennium Copyright Act (DMCA) Disclaimer governs the use of our website and our services. We respect the intellectual property rights of others and expect our users to do the same.
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Notification of Infringement</h2>
                    <p className="mb-4 text-gray-600">
                        If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via our website, please notify our copyright agent, as set forth in the DMCA. To file a notice of infringement with us, you must provide a written communication that includes substantially the following:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 leading-8">
                        <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright.</li>
                        <li>Identification of the copyrighted work claimed to have been infringed.</li>
                        <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material.</li>
                        <li>Your contact information, including your address, telephone number, and email address.</li>
                        <li>A statement that you have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                        <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of the copyright.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Counter-Notification</h2>
                    <p className="mb-4 text-gray-600">
                        If you believe that your content was removed or disabled by mistake or misidentification, you may file a counter-notification with us. Your counter-notification must include:
                    </p>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Your physical or electronic signature.</li>
                        <li>Identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or disabled.</li>
                        <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification.</li>
                        <li>Your name, address, and telephone number, and a statement that you consent to the jurisdiction of the federal court in your district and that you will accept service of process from the person who provided the original notification of the alleged infringement.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Repeat Infringers</h2>
                    <p className="mb-4 text-gray-600">
                        We may, in appropriate circumstances, disable or terminate the accounts of users who are repeat infringers.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Information</h2>
                    <p className="text-gray-600">
                        For any questions regarding this DMCA Disclaimer, please contact us at
                        <a href={`mailto:${siteMetadata.email}`} className="text-blue-600 hover:underline">{siteMetadata.email}</a>.
                </p>
            </section>
        </main>
    </div >
  );
}
