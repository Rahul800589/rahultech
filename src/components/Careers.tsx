import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  MapPin,
  Heart,
  Coffee,
  GraduationCap,
  Gamepad2,
  Gift,
  Users,
  Zap,
  Trophy,
  Target,
  X,
} from "lucide-react";

// ---------------- JOB TYPES ----------------
interface Job {
  title: string;
  image: string;
  description: string;
  tags: string[];
  location: string;
}

// ---------------- FORM TYPES ----------------
interface ApplyFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  resume: File | null;
  image: File | null;
  message: string;
}

// ---------------- MODAL PROPS ----------------
interface ApplyModalProps {
  job: Job;
  onClose: () => void;
}

// ---------------- JOB DATA ----------------
const jobs: Job[] = [
  {
    title: "Senior Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000",
    description:
      "Lead the development of scalable web applications and mentor junior developers.",
    tags: ["React", "Node.js", "TypeScript", "AWS"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    description:
      "Design and maintain CI/CD pipelines and cloud infrastructure.",
    tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
    location: "Remote",
  },
  {
    title: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    description:
      "Create intuitive and beautiful user experiences for our products.",
    tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    description: "Analyze complex data sets and build predictive models.",
    tags: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
    description: "Drive product vision and strategy for our key initiatives.",
    tags: ["Agile", "Leadership", "Analytics", "Strategy"],
    location: "Jaipur, Rajasthan",
  },
  {
    title: "Cybersecurity Specialist",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    description:
      "Protect our systems and ensure compliance with security standards.",
    tags: ["Penetration Testing", "CISSP", "Network Security"],
    location: "Jaipur, Rajasthan",
  },
];

// ---------------- APPLY MODAL ----------------
const ApplyModal: React.FC<ApplyModalProps> = ({ job, onClose }) => {
  const [form, setForm] = useState<ApplyFormData>({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    image: null,
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`✅ Application submitted for ${job.title}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-orange-600"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-orange-700 mb-4">
          Apply for {job.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="text"
            name="experience"
            placeholder="Years of Experience"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="text-sm text-gray-700">
                Upload Resume (PDF/DOC)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-gray-700">Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              />
            </div>
          </div>

          <textarea
            name="message"
            rows={3}
            placeholder="Why do you want to join us?"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

// ---------------- MAIN COMPONENT ----------------
const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <>
      {/* HERO SECTION */}
      {/* <section className="py-24 bg-gradient-to-r from-orange-50 via-white to-orange-100 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Join Our <span className="text-orange-600">Amazing Team</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Be part of a team that's shaping the digital future. Explore our open
          positions and apply today!
        </p>
      </section> */}

      <section className="relative py-28 bg-gradient-to-br from-orange-100 via-white to-orange-200 text-gray-900 overflow-hidden">
  {/* Background Decorative Orbs */}
  <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Join Our{" "}
      <span className="bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">
        Amazing Team
      </span>
    </h1>
    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-16">
      Be part of a team that's shaping the digital future.  
      Explore our open positions and grow your career with{" "}
      <span className="text-orange-600 font-semibold">ATS GLOBAL TECH</span>.
    </p>

    {/* Career Highlights */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-8">
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-orange-100 hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-orange-600 mb-3">
          🚀 Innovative Projects
        </h3>
        <p className="text-gray-600">
          Work on groundbreaking technology solutions that make a real-world
          impact and challenge your creativity.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 border border-orange-100 hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-orange-600 mb-3">
          🌍 Global Culture
        </h3>
        <p className="text-gray-600">
          Collaborate with diverse teams across the globe and experience a
          culture of innovation, learning, and inclusivity.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-8 border border-orange-100 hover:shadow-xl transition duration-300">
        <h3 className="text-xl font-semibold text-orange-600 mb-3">
          💼 Career Growth
        </h3>
        <p className="text-gray-600">
          We invest in our people with mentorship, learning programs, and
          clear growth opportunities to help you reach your full potential.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* JOBS SECTION */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-700 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{job.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-600 flex items-center gap-1 mb-3">
                  <MapPin className="h-4 w-4 text-orange-500" /> {job.location}
                </p>

                <button
                  onClick={() => setSelectedJob(job)}
                  className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLY MODAL */}
      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
};

export default Careers;
