import React from 'react'

const UsersDetails = ({user}) => {
  return (
    <div className="max-w-md rounded-xl border p-5 shadow-sm space-y-3">
      <h2 className="text-xl font-semibold">{user.name}</h2>

      <div className="text-sm text-gray-700 space-y-1">
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
      </div>

      <div className="pt-3 border-t">
        <h3 className="font-medium">Address</h3>
        <p className="text-sm">
          {user.address.street}, {user.address.suite}
          <br />
          {user.address.city} - {user.address.zipcode}
        </p>
        <p className="text-sm text-gray-500">
          Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
        </p>
      </div>

      <div className="pt-3 border-t">
        <h3 className="font-medium">Company</h3>
        <p className="text-sm">
          <strong>Name:</strong> {user.company.name}
        </p>
        <p className="text-sm italic">{user.company.catchPhrase}</p>
        <p className="text-sm text-gray-600">{user.company.bs}</p>
      </div>
    </div>
  )
}

export default UsersDetails