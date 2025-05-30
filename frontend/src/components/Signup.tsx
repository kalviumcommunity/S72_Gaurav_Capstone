import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { EyeIcon, EyeSlashIcon, UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import SkeletonLoader from './SkeletonLoader';

const imageUrl = '/login-side.jpg';

const RightPanel: React.FC = () => (
  <div className="hidden md:flex flex-1 items-center justify-center bg-black/10">
    <img src={imageUrl} alt="Panel" className="object-cover w-full h-full" />
  </div>
);

const accent = 'from-deep-purple-500 to-hot-pink-500';
const accentText = 'text-deep-purple-600';
const accentBtn = 'bg-gradient-to-r from-deep-purple-500 to-hot-pink-500';
const accentBtnHover = 'hover:from-hot-pink-500 hover:to-deep-purple-500';
const accentFocus = 'focus:ring-deep-purple-400';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup, loginWithGoogle } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signup(email, password, name, remember);
      navigate('/home');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-sans px-4">
        <SkeletonLoader variant="signup" />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen h-screen flex font-sans bg-white">
      {/* Left: Signup Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-8 py-12 bg-white rounded-2xl shadow-lg">
        <div className="w-full max-w-sm">
          <div className="flex items-center justify-center gap-6 mb-8">
            <img src="/Logo.png" alt="KampusKart Logo" className="h-12 w-12 object-contain" style={{ background: 'none', border: 'none', borderRadius: 0, boxShadow: 'none' }} />
            <span className="text-h4 font-extrabold text-black tracking-tight font-sans">Kampuskart</span>
          </div>
          <h2 className="mb-6 text-h3 font-bold text-black text-center pt-8">Sign Up</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-orange/10 p-4">
                <div className="text-sm text-orange-700">{error}</div>
              </div>
            )}
            <div className="space-y-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <UserIcon className="h-5 w-5" />
                </span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-3 border-b border-gray-300 focus:border-black focus:ring-0 text-black placeholder-gray-400 bg-transparent"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <EnvelopeIcon className="h-5 w-5" />
                </span>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border-b border-gray-300 focus:border-black focus:ring-0 text-black placeholder-gray-400 bg-transparent"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <LockClosedIcon className="h-5 w-5" />
                </span>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  className="block w-full pl-10 pr-10 py-3 border-b border-gray-300 focus:border-black focus:ring-0 text-black placeholder-gray-400 bg-transparent"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white text-black`}
                  onClick={() => setShowPassword((v) => !v)}
                  style={{ transition: 'color 0.2s' }}
                >
                  {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <label className="flex items-center text-sm text-gray-500">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={e => setRemember(e.target.checked)}
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded mr-2"
                  />
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 rounded-full text-lg font-semibold text-white bg-[#181818] shadow-lg hover:bg-[#00C6A7] hover:text-white transition`}
              style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' }}
            >
              {loading ? 'Creating account...' : 'Sign up'}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <button
              type="button"
              onClick={loginWithGoogle}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-full text-lg font-semibold text-black bg-white border border-[#E0E0E0] hover:bg-[#FFD166] hover:text-black transition"
            >
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              Sign up with Google
            </button>

            <div className="text-center text-sm mt-6 text-gray-500">
              Already have an account?{' '}
              <Link to="/login" className="text-[#F05A25] font-semibold hover:underline">Login</Link>
            </div>
          </form>
        </div>
      </div>
      {/* Right: Image Panel */}
      <RightPanel />
    </div>
  );
};

export default Signup; 