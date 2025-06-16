"use client"

export default function RequestDetails() {
  const handleClose = () => {
    console.log("Close clicked")
  }

  const handleApprove = () => {
    console.log("Approve request clicked")
  }

  const handleReject = () => {
    console.log("Reject request clicked")
  }

  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-900">Request Details</h1>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Vehicle Request Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-medium text-gray-900">Vehicle Request</h2>
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">PENDING APPROVAL</span>
            </div>
            <p className="text-sm text-gray-600">Request ID: REQ-2344</p>
          </div>

          {/* Request Information */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Request Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Requested By:</span>
                <p className="font-medium">Aron Civil HR Department</p>
              </div>
              <div>
                <span className="text-gray-600">Request Type:</span>
                <p className="font-medium">Official business</p>
              </div>
              <div>
                <span className="text-gray-600">Vehicle Type:</span>
                <p className="font-medium">SUV</p>
              </div>
              <div>
                <span className="text-gray-600">Number of Passengers:</span>
                <p className="font-medium">4</p>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Trip Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Pickup Date & Time:</span>
                <p className="font-medium">15/10/2024, 08:00 AM</p>
              </div>
              <div>
                <span className="text-gray-600">Return Date & Time:</span>
                <p className="font-medium">15/10/2024, 05:00 PM</p>
              </div>
              <div>
                <span className="text-gray-600">Pickup Location:</span>
                <p className="font-medium">University of Rwanda, Kigali Campus</p>
              </div>
              <div>
                <span className="text-gray-600">Destination:</span>
                <p className="font-medium">Kigali Convention Center</p>
              </div>
            </div>
          </div>

          {/* Trip Purpose */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Trip Purpose</h3>
            <p className="text-sm text-gray-700">
              Attending the annual ICT conference at Kigali Convention Center. Need to transport 4 HR staff members for
              the event.
            </p>
          </div>

          {/* Request Timeline */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Request Timeline</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="font-medium">15/10/2024 10:30 - Request Submitted</p>
                  <p className="text-gray-600">Request created by Aron Civil</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="font-medium">15/10/2024 11:45 - Department Approval</p>
                  <p className="text-gray-600">Approved by HR Department Head</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="font-medium">15/10/2024 02:15 - Fleet Manager Review</p>
                  <p className="text-gray-600">Pending fleet manager approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Close
          </button>
          <button
            onClick={handleApprove}
            className="px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Approve Request
          </button>
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Reject Request
          </button>
        </div>
      </div>
    </div>
  )
}
