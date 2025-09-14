"use client"
import ProtectedRoute from "@/modules/auth/layout/layout";
import { useAuth } from "@/hooks/use-auth";

function DashboardContent() {
    const { user, signOut } = useAuth();
    console.log(user)
    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
                <p className="text-gray-600 mb-4">Welcome, {user?.email}!</p>
                <p className="text-gray-600 mb-4">User Id, {user?.id}!</p>
                <button
                    onClick={handleSignOut}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <DashboardContent />
        </ProtectedRoute>
    );
}