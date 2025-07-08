'use client';

import Link from 'next/link';
import { ArrowLeft, Shield, Check } from 'lucide-react';

export default function PrivacyPage() {
  const privacyContent = [
    {
      title: '1. Thu thập thông tin',
      content: 'Chúng tôi thu thập thông tin cần thiết để cung cấp dịch vụ thanh toán, bao gồm thông tin cá nhân, thông tin giao dịch và thông tin kỹ thuật.'
    },
    {
      title: '2. Loại thông tin thu thập',
      items: [
        'Thông tin cá nhân: Họ tên, email, số điện thoại',
        'Thông tin tài khoản: Số tài khoản ngân hàng, tên ngân hàng',
        'Thông tin giao dịch: Lịch sử thanh toán, số tiền, thời gian',
        'Thông tin kỹ thuật: Địa chỉ IP, loại thiết bị, trình duyệt'
      ]
    },
    {
      title: '3. Mục đích sử dụng thông tin',
      items: [
        'Xử lý giao dịch thanh toán',
        'Xác thực danh tính người dùng',
        'Phòng chống gian lận',
        'Cải thiện chất lượng dịch vụ',
        'Thông báo về dịch vụ và khuyến mại'
      ]
    },
    {
      title: '4. Bảo mật thông tin',
      content: 'Chúng tôi áp dụng các biện pháp bảo mật tiên tiến bao gồm mã hóa SSL, xác thực đa yếu tố và giám sát bảo mật 24/7.'
    },
    {
      title: '5. Chia sẻ thông tin',
      content: 'Thông tin của bạn chỉ được chia sẻ với các đối tác tin cậy khi cần thiết để xử lý giao dịch hoặc theo yêu cầu của pháp luật.'
    },
    {
      title: '6. Quyền của người dùng',
      items: [
        'Truy cập và xem thông tin cá nhân',
        'Yêu cầu chỉnh sửa thông tin không chính xác',
        'Yêu cầu xóa tài khoản và dữ liệu',
        'Từ chối nhận thông tin marketing'
      ]
    },
    {
      title: '7. Lưu trữ thông tin',
      content: 'Thông tin được lưu trữ trong thời gian cần thiết để cung cấp dịch vụ và tuân thủ quy định pháp luật, tối thiểu 5 năm cho thông tin giao dịch.'
    },
    {
      title: '8. Liên hệ',
      content: 'Nếu có thắc mắc về chính sách bảo mật, vui lòng liên hệ qua email: privacy@qrpayment.vn hoặc hotline: 1900-xxx-xxx.'
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
              <Shield className="w-8 h-8" />
              <h1 className="ml-3 text-3xl font-bold">Chính sách bảo mật</h1>
            </div>
            <p className="text-white/90 mt-2">
              Cam kết bảo vệ thông tin cá nhân của người dùng
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="space-y-8">
              {privacyContent.map((section, index) => (
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
                    href="/terms"
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Điều khoản sử dụng
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