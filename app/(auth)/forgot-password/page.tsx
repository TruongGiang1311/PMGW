'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft } from 'lucide-react';
import AuthCard from '../../../component/ui/AuthCard';
import AuthHeader from '../../../component/ui/AuthHeader';
import FormInput from '../../../component/ui/FormInput';
import PrimaryButton from '../../../component/ui/PrimaryButton';
import ErrorMessage from '../../../component/ui/ErrorMessage';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  const validateEmail = (email: string) => { 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email là bắt buộc');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Email không hợp lệ');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically make an API call to send reset password email
      console.log('Forgot password request for:', email);
      
      setIsSuccess(true);
    } catch (error) {
      console.error('Forgot password failed:', error);
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <AuthCard>
        <AuthHeader 
          title="Kiểm tra email của bạn"
          description="Chúng tôi đã gửi hướng dẫn khôi phục mật khẩu đến email của bạn"
        />
        
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-8 h-8 text-green-600" />
          </div>
          
          <div className="space-y-2">
            <p className="text-gray-700">
              Chúng tôi đã gửi email khôi phục mật khẩu đến:
            </p>
            <p className="font-medium text-gray-900">{email}</p>
          </div>
          
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              Vui lòng kiểm tra hộp thư đến (và cả thư mục spam) của bạn và làm theo hướng dẫn để đặt lại mật khẩu.
            </p>
          </div>
          
          <div className="space-y-3 pt-4">
            <PrimaryButton
              onClick={() => {
                setIsSuccess(false);
                setEmail('');
              }}
            >
              Gửi lại email
            </PrimaryButton>
            
            <Link 
              href="/login" 
              className="block text-sm text-blue-600 hover:text-blue-500"
            >
              ← Quay lại đăng nhập
            </Link>
          </div>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard>
      <AuthHeader 
        title="Quên mật khẩu"
        description="Nhập email của bạn để nhận hướng dẫn khôi phục mật khẩu"
      />

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <ErrorMessage message={error} />}

        <FormInput
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Nhập email của bạn"
          label="Email"
          icon={Mail}
          error={error}
        />

        <PrimaryButton
          type="submit"
          loading={isLoading}
          loadingText="Đang gửi..."
        >
          Gửi hướng dẫn khôi phục
        </PrimaryButton>
      </form>

      <div className="mt-6 text-center">
        <Link 
          href="/login" 
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Quay lại đăng nhập
        </Link>
      </div>
    </AuthCard>
  );
} 