
import { Link } from "react-router-dom";

const Privacy = () => {
  return (

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-200">Last Updated: August 10, 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              At Free Avatar Generator, we take your privacy seriously. This
              Privacy Policy explains how we handle your information when you
              use our Service.
            </p>
            <p className="text-gray-700">
              Our Service is designed with privacy in mind - all avatar
              generation happens locally in your browser, and we don't collect
              personal data unless explicitly provided by you.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Don't Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We want to emphasize what we{" "}
              <span className="font-semibold">don't</span> collect:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>We don't collect any personal identification information</li>
              <li>We don't collect your IP address or device identifiers</li>
              <li>We don't collect the avatars you generate</li>
              <li>We don't use tracking cookies or analytics</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We May Collect
            </h2>
            <p className="text-gray-700 mb-4">
              In limited circumstances, we may collect information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                <span className="font-medium">Contact Information:</span> If you
                email us for support, we'll collect your email address to
                respond
              </li>
              <li>
                <span className="font-medium">Error Reports:</span> If you
                opt-in to send error reports, we may receive technical
                information about the issue
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 mb-4">
              Our Service may include third-party services for specific
              functions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>
                <span className="font-medium">Hosting:</span> Our website is
                hosted on namecheap.com
              </li>
              <li>
                <span className="font-medium">Advertisements:</span> We use ad
                providers to display ads, which may collect data as described in
                their privacy policy
              </li>
            </ul>
            <p className="text-gray-700">
              We recommend reviewing the privacy policies of these third-party
              services for more information.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-700 mb-4">
              Our Service is not directed to children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If we become aware that a child under 13 has provided us with
              personal information, we will take steps to delete such
              information.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We implement reasonable security measures to protect any
              information we might collect. However, please be aware that no
              method of transmission over the internet or method of electronic
              storage is 100% secure.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please
              contact us at
              <a
                href="mailto:support@freeavatargenerator.com"
                className="text-blue-600 hover:underline ml-1"
              >
                support@freeavatargenerator.com
              </a>
              .
            </p>
          </div>

          <div className="border-t pt-6 mt-6 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Avatar Generator
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Privacy;
