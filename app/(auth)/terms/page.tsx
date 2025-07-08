'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, Check } from 'lucide-react';

export default function TermsPage() {
  const termsContent = [
    {
      title: '1. Giới thiệu',
      content: 'Chào mừng bạn đến với hệ thống thanh toán QR của chúng tôi. Bằng việc sử dụng dịch vụ, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu dưới đây.'
    },
    {
      title: '2. Định nghĩa dịch vụ',
      content: 'Dịch vụ của chúng tôi bao gồm cung cấp giải pháp thanh toán QR, xử lý giao dịch, quản lý tài khoản và các tính năng liên quan khác.'
    },
    {
      title: '3. Quyền và nghĩa vụ của người dùng',
      items: [
        'Cung cấp thông tin chính xác và đầy đủ khi đăng ký',
        'Bảo mật thông tin đăng nhập và không chia sẻ cho bên thứ ba',
        'Sử dụng dịch vụ cho mục đích hợp pháp',
        'Tuân thủ các quy định pháp luật hiện hành'
      ]
    },
    {
      title: '4. Quyền và nghĩa vụ của nhà cung cấp',
      items: [
        'Cung cấp dịch vụ ổn định và an toàn',
        'Bảo mật thông tin người dùng',
        'Hỗ trợ kỹ thuật 24/7',
        'Thông báo trước khi có thay đổi dịch vụ'
      ]
    },
    {
      title: '5. Phí dịch vụ',
      content: 'Phí dịch vụ sẽ được công bố rõ ràng trên website. Chúng tôi có quyền điều chỉnh phí với thông báo trước 30 ngày.'
    },
    {
      title: '6. Chấm dứt dịch vụ',
      content: 'Cả hai bên có quyền chấm dứt sử dụng dịch vụ với thông báo trước. Các giao dịch đang xử lý sẽ được hoàn thành theo quy định.'
    },
    {
      title: '7. Giải quyết tranh chấp',
      content: 'Mọi tranh chấp sẽ được giải quyết thông qua thương lượng. Nếu không thể thỏa thuận, tranh chấp sẽ được giải quyết tại Tòa án có thẩm quyền.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-white hover:text-gray-200 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Quay lại
            </Link>
            <div className="flex items-center text-white">
              <FileText className="w-8 h-8" />
              <h1 className="ml-3 text-3xl font-bold">Điều khoản sử dụng</h1>
            </div>
            <p className="text-white/90 mt-2">
              Điều khoản và điều kiện sử dụng hệ thống thanh toán QR
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="space-y-8">
              {termsContent.map((section, index) => (
                <div key={index} className="border-b border-gray-100 pb-8 last:border-b-0">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  
                  {section.content && (
                    <p className="text-gray-700 leading-relaxed text-base">
                      {section.content}
                    </p>
                  )}
                  
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-700">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 -mx-8 -mb-8 mt-8 px-8 py-6 border-t">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <p className="text-sm text-gray-600">
                  Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
                </p>
                <div className="flex gap-3">
                  <Link
                    href="/privacy"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Chính sách bảo mật
                  </Link>
                  <Link
                    href="/register"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    Đăng ký ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 