import React, { useState } from 'react';
import img from "../assets/to-do-list-laptop-grey-background-150052787.webp"

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="feature-card relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Upper Section - Image */}
      <div
        className={`image-wrapper transition-transform duration-500 ease-in-out translate-y-0`}
      >
        <img src={imageSrc} alt={title} className="object-cover w-full h-40" />
      </div>

      {/* Lower Section - Description */}
      <div className={`description transition-all duration-500 ease-in-out ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
        <h3 className="feature-title text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="feature-description text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 py-16 bg-gray-100">
      {/* Feature Card 1 */}
      <FeatureCard
        imageSrc="/path/to/task-management.jpg"
        title="Task Management"
        description="Create, update, and organize tasks with ease. Keep your projects on track and never miss a deadline."
      />

      {/* Feature Card 2 */}
      <FeatureCard
        imageSrc={img}
        title="Reminders & Deadlines"
        description="Set reminders and receive notifications for upcoming deadlines. Stay on top of your to-dos."
      />

      {/* Feature Card 3 */}
      <FeatureCard
        imageSrc=""
        title="Progress Tracking"
        description="Visualize your progress and keep track of completed tasks with an intuitive progress tracker."
      />

      {/* Feature Card 4 */}
      <FeatureCard
        imageSrc="/path/to/sync-devices.jpg"
        title="Sync Across Devices"
        description="Access your tasks and to-dos from anywhere. Sync seamlessly across all your devices."
      />

      {/* Feature Card 5 */}
      <FeatureCard
        imageSrc="/path/to/collaboration.jpg"
        title="Collaborate with Others"
        description="Share your to-do lists with team members or friends. Work together to achieve common goals."
      />

      {/* Feature Card 6 */}
      <FeatureCard
        imageSrc="/path/to/data-security.jpg"
        title="Data Security"
        description="Your tasks and information are securely encrypted, ensuring privacy and security for all users."
      />
    </section>
  );
};

export default Features;
