import { Check, X } from "lucide-react"

export default function VehicleRequestPage() {
  return (
    <div className="container mx-auto py-6 max-w-6xl bg-gray-50 min-h-screen">
      {/* Filter Card */}
      <div className="bg-white rounded-lg border shadow-sm mb-6">
        <div className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Status:</span>
              <select className="h-8 w-[120px] px-3 py-1 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="all">All Requests</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Date Range:</span>
              <select className="h-8 w-[120px] px-3 py-1 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="custom">Custom</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500">Reason:</span>
              <select className="h-8 w-[120px] px-3 py-1 text-sm border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="all">All Reasons</option>
                <option value="meeting">Meeting</option>
                <option value="field">Field Work</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Request Card */}
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Request #VR-002</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Requester:</p>
                <p className="font-medium">Jane Smith</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Department:</p>
                <p className="font-medium">Engineering</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Reason:</p>
                <p className="font-medium">Official Meeting</p>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Passengers:</p>
                <p className="font-medium">5</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Destination:</p>
                <p className="font-medium">Nyaguta Campus</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Estimated Distance:</p>
                <p className="font-medium">180 km</p>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Start Date:</p>
                <p className="font-medium">2024-03-18</p>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">End Date:</p>
                <p className="font-medium">2024-03-30</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">Requested Vehicle:</p>
            <p className="font-medium">LR 004 - Toyota Hilux</p>
          </div>

          {/* Simple separator */}
          <div className="border-t border-gray-200 my-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Driver Assignment:</p>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="vwanjau">V.Wanjau</option>
                  <option value="jdoe">J.Doe</option>
                  <option value="psmith">P.Smith</option>
                </select>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Initial Odometer (km):</p>
                <div className="flex items-center h-10 px-3 border border-gray-300 rounded-md bg-gray-50">
                  <span>24578</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Vehicle Assignment:</p>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="patrol">PatrolUnit23346</option>
                  <option value="suv1">SUV-001</option>
                  <option value="truck1">Truck-002</option>
                </select>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">End Odometer (km):</p>
                <div className="flex items-center h-10 px-3 border border-gray-300 rounded-md bg-gray-50">
                  <span>34557</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">Provided Fuel:</p>
                <div className="flex items-center h-10 px-3 border border-gray-300 rounded-md bg-gray-50">
                  <span>2.5L</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Distance of Travel:</p>
                <div className="flex items-center h-10 px-3 border border-gray-300 rounded-md bg-gray-50">
                  <span>9980km</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-green-500 rounded-md bg-green-100 text-green-700 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors">
              <Check className="h-4 w-4 text-green-500" />
              Approve
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-red-500 rounded-md bg-red-100 text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors">
              <X className="h-4 w-4 text-red-500" />
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
