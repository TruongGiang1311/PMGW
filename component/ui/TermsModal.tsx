'use client';

import { useState, useEffect } from 'react';
import { X, Shield, FileText, Check } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
}

export default function TermsModal({ isOpen, onClose, type }: TermsModalProps) {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>(type);

  useEffect(() => {
    setActiveTab(type);
  }, [type]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const termsContent = {
    title: 'Điều khoản sử dụng',
    icon: <FileText className="w-6 h-6" />,
    content: [
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
    ]
  };

  const privacyContent = {
    title: 'Chính sách bảo mật',
    icon: <Shield className="w-6 h-6" />,
    content: [
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
    ]
  };

  const currentContent = activeTab === 'terms' ? termsContent : privacyContent;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Overlay */}
        <div 
          className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex items-center text-white">
                  {currentContent.icon}
                  <h2 className="ml-3 text-xl font-semibold">{currentContent.title}</h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Tabs */}
            <div className="flex mt-4 space-x-1">
              <button
                onClick={() => setActiveTab('terms')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'terms'
                    ? 'bg-white text-blue-600'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                Điều khoản sử dụng
              </button>
              <button
                onClick={() => setActiveTab('privacy')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'privacy'
                    ? 'bg-white text-blue-600'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Shield className="w-4 h-4 inline mr-2" />
                Chính sách bảo mật
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(85vh-180px)]">
            <div className="space-y-6">
              {currentContent.content.map((section, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  
                  {section.content && (
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  
                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-700">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer - Fixed at bottom */}
          <div className="bg-gray-50 px-6 py-4 border-t flex-shrink-0">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">
                Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
              </p>
              <button
                onClick={onClose}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Đã hiểu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 