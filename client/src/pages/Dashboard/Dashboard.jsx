import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { projectAPI, blogAPI } from '../../services/api';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, [user]);

  const fetchUserData = async () => {
    try {
      const [projectsRes, blogsRes] = await Promise.all([
        projectAPI.getUserProjects(user.id),
        blogAPI.getUserBlogs(user.id)
      ]);
      setProjects(projectsRes.data.data);
      setBlogs(blogsRes.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {user?.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Projects</h3>
            <p className="text-3xl font-bold text-blue-600">{projects.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Blogs</h3>
            <p className="text-3xl font-bold text-green-600">{blogs.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Profile Views</h3>
            <p className="text-3xl font-bold text-purple-600">0</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="/dashboard/profile"
              className="px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-center"
            >
              Edit Profile
            </Link>
            <Link
              to="/dashboard/projects/new"
              className="px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 text-center"
            >
              Add Project
            </Link>
            <Link
              to="/dashboard/blogs/new"
              className="px-4 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 text-center"
            >
              Write Blog
            </Link>
            <Link
              to="/"
              className="px-4 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-center"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          {projects.length === 0 ? (
            <p className="text-gray-600">No projects yet. Create your first project!</p>
          ) : (
            <div className="space-y-4">
              {projects.slice(0, 5).map((project) => (
                <div key={project.id} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold text-gray-900">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  <div className="mt-2 flex space-x-2">
                    <Link
                      to={`/dashboard/projects/${project.id}/edit`}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Blogs */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Blogs</h2>
          {blogs.length === 0 ? (
            <p className="text-gray-600">No blog posts yet. Write your first blog!</p>
          ) : (
            <div className="space-y-4">
              {blogs.slice(0, 5).map((blog) => (
                <div key={blog.id} className="border-b pb-4 last:border-b-0">
                  <h3 className="font-semibold text-gray-900">{blog.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{blog.excerpt}</p>
                  <div className="mt-2 flex space-x-4 text-sm text-gray-500">
                    <span>{blog.views || 0} views</span>
                    <span>{blog.published ? 'Published' : 'Draft'}</span>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    <Link
                      to={`/dashboard/blogs/${blog.id}/edit`}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
