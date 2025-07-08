TỔNG QUAN VÀ PHÂN TÍCH HỆ THỐNG THANH TOÁN QR
1. Giới thiệu dự án
Tên dự án: Hệ thống thanh toán hóa đơn qua mã QR kết nối ngân hàng

Mô tả: Dự án xây dựng một hệ thống cho phép người dùng thực hiện thanh toán hóa đơn thông qua mã QR. Quy trình thanh toán được tích hợp với hệ thống ngân hàng, sử dụng một thành phần trung gian (Notification Gateway) để xử lý và xác nhận các giao dịch. Hệ thống đảm bảo an toàn, nhanh chóng và tiện lợi trong việc thanh toán không tiền mặt.
2. Thành phần hệ thống
- Client: Giao diện người dùng, cho phép tạo đơn hàng, hiển thị mã QR và kết quả thanh toán.
- Notification Gateway: Trung gian giữa Client và hệ thống ngân hàng, xử lý ghi nhận đơn hàng và xác nhận thanh toán.
- Bank System: Hệ thống ngân hàng tiếp nhận giao dịch, xác minh hóa đơn, xử lý chuyển tiền và xác nhận hoàn tất giao dịch.
3. Luồng chức năng chính
Bước 1: Người dùng gửi yêu cầu thanh toán từ ứng dụng.
Bước 2: Client tạo đơn hàng và gửi thông tin đến Notification Gateway.
Bước 3: Gateway phản hồi chuỗi QR → Client tạo ảnh QR và hiển thị.
Bước 4: Người dùng quét mã QR để thanh toán thông qua ngân hàng.
Bước 5: Ngân hàng xác thực Id hóa đơn với Gateway → chuyển tiền → gạch nợ.
Bước 6: Gateway phản hồi kết quả thanh toán cho Client.
4. Mô hình hoạt động (Sequence Diagram)
Mô hình minh họa thứ tự tương tác giữa các thành phần trong hệ thống như sơ đồ tuần tự đã cung cấp.
5. Phân tích chức năng
Thành phần	Chức năng
Client	Tạo đơn hàng, hiển thị mã QR, nhận kết quả thanh toán
Notification Gateway	Lưu trữ đơn hàng, tạo chuỗi QR, xác minh hóa đơn, gạch nợ
Bank System	Quét QR, kiểm tra hóa đơn, chuyển tiền, gửi kết quả thanh toán
6. Các tính năng mở rộng
- Gửi thông báo thanh toán thành công qua email/SMS
- Lưu trữ và quản lý lịch sử giao dịch
- Tích hợp nhiều ngân hàng
- Xác thực 2 lớp cho người dùng
- Tự động hoàn tiền khi hủy đơn
7. Đề xuất công nghệ
- Frontend (Client): ReactJS / Flutter / Android/iOS
- Backend Gateway: Node.js / Spring Boot / .NET
- QR Code Generator: qrcode (Node.js), ZXing (Java)
- Database: PostgreSQL / MongoDB / Redis
- Tích hợp ngân hàng: API RESTful theo chuẩn Open Banking / ISO 20022
8. Rủi ro và biện pháp
Rủi ro	Biện pháp
Thanh toán trùng	Kiểm tra trạng thái đơn hàng trước khi gạch nợ
Bảo mật thông tin hóa đơn	Mã hóa QR, giới hạn thời gian hiệu lực
Mất kết nối giữa các hệ thống	Retry qua Message Queue, log cảnh báo
Người dùng hủy đơn sau thanh toán	Xây dựng quy trình hoàn tiền tự động

