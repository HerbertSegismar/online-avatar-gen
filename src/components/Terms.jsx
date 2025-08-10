
import { Link } from "react-router-dom";

const Terms = () => {
  return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-200">Last Updated: August 10, 2025</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the Free Avatar Generator website
              ("Service"), you agree to be bound by these Terms of Service. If
              you disagree with any part of the terms, you may not access the
              Service.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Service Description
            </h2>
            <p className="text-gray-700 mb-4">
              The Service provides users with the ability to generate
              customizable avatar images in SVG format. All processing occurs
              locally in the user's browser, and no personal data is collected
              or stored by the Service.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-4">
              You agree to use the Service only for lawful purposes and in a way
              that does not infringe the rights of, restrict, or inhibit anyone
              else's use and enjoyment of the Service.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-700 mb-4">
              Avatars generated using this Service are provided to you under a
              Creative Commons Zero (CC0) license, meaning you can use them for
              any purpose without attribution.
            </p>
            <p className="text-gray-700">
              The code and design of the Service itself are protected by
              copyright and may not be reproduced without permission.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 mb-4">
              The Service is provided "as is" without any warranties, express or
              implied. We do not guarantee that the Service will be
              uninterrupted, timely, secure, or error-free.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-4">
              In no event shall Free Avatar Generator be liable for any damages
              arising out of the use or inability to use the materials on the
              Service.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Changes to Terms
            </h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. Your
              continued use of the Service after any such changes constitutes
              your acceptance of the new Terms of Service.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Contact Information
            </h2>
            <p className="text-gray-700">
              If you have any questions about these Terms, please contact us at
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

export default Terms;
