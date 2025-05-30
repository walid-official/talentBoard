"use client"
import { Briefcase, Users, ShieldCheck } from 'lucide-react';

export const Features = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Choose TalentBoard?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Empower your projects with handpicked freelance teams. Scale quickly, reduce risk, and deliver smarter.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <Briefcase className="w-10 h-10 text-indigo-700 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Curated Talent</h3>
            <p className="text-gray-600">
              Access pre-vetted professionals with proven skills in development, design, and strategy.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <Users className="w-10 h-10 text-indigo-700 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-gray-600">
              Create, manage, and scale dynamic teams with seamless communication and task tracking.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
            <ShieldCheck className="w-10 h-10 text-indigo-700 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">
              Protected by robust verification, real-time insights, and end-to-end encrypted workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
