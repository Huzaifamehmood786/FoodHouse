import PageTransition from "../components/PageTransition";
import { getUser } from "../utils/auth";

export default function Profile() {
  const user = getUser();

  return (
    <PageTransition>
      <div className="min-h-screen bg-base-200 p-6">

        {/* Header */}
        <h2 className="text-3xl font-bold mb-6">👤 Profile</h2>

        {/* Profile Card */}
        <div className="card bg-base-100 shadow-xl p-6 flex flex-col md:flex-row items-center gap-6">

          {/* Avatar */}
          <div className="avatar">
             
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{user?.email}</h3>
            <p className="text-premium">Premium User 🚀</p>

            {/* Badge */}
            <div className="mt-2">
              <span className="badge badge-success mr-2">Active</span>
              <span className="text-Verified">Verified</span>
            </div>
          </div>

          {/* Button */}
          <button className="btn btn-primary">
            Edit Profile
          </button>
        </div>

        {/* Stats */}
        <div className="stats shadow w-full mt-6">

          <div className="stat">
            <div className="stat-title">Orders</div>
            <div className="stat-value">24</div>
          </div>

          <div className="stat">
            <div className="stat-title">Spent</div>
            <div className="stat-value">$240</div>
          </div>

          <div className="stat">
            <div className="stat-title">Favorites</div>
            <div className="stat-value">12</div>
          </div>

        </div>

        {/* Orders */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">📦 Orders</h3>

          <div className="space-y-3">
            <div className="card bg-base-100 shadow p-4 flex justify-between">
              <span>Burger Combo</span>
              <span>$10</span>
            </div>

            <div className="card bg-base-100 shadow p-4 flex justify-between">
              <span>Pizza Deal</span>
              <span>$15</span>
            </div>
          </div>
        </div>

        {/* NEW FEATURE: Activity Timeline */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">📊 Activity</h3>

          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start">Order Placed</div>
              <div className="timeline-end timeline-box">Burger Combo</div>
            </li>
            <li>
              <div className="timeline-start">Payment Done</div>
              <div className="timeline-end timeline-box">Card</div>
            </li>
          </ul>
        </div>

      </div>
    </PageTransition>
  );
}