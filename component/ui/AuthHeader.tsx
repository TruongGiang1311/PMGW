import { CreditCard } from 'lucide-react';

interface AuthHeaderProps {
  title: string;
  description: string;
}

export default function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <CreditCard className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
} 