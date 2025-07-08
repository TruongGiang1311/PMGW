# UI Components

Các component UI tái sử dụng cho hệ thống authentication.

## Components

### AuthCard
Container chính cho các form authentication.
```tsx
<AuthCard maxWidth="md">
  {children}
</AuthCard>
```

### AuthHeader
Header với logo và title.
```tsx
<AuthHeader 
  title="Đăng nhập" 
  description="Mô tả" 
/>
```

### FormInput
Input field thông thường với icon.
```tsx
<FormInput
  id="email"
  name="email"
  type="email"
  value={value}
  onChange={onChange}
  placeholder="Nhập email"
  label="Email"
  icon={Mail}
  error={error}
/>
```

### PasswordInput
Input field cho password với toggle show/hide.
```tsx
<PasswordInput
  id="password"
  name="password"
  value={value}
  onChange={onChange}
  placeholder="Nhập mật khẩu"
  label="Mật khẩu"
  error={error}
/>
```

### FormSelect
Select dropdown.
```tsx
<FormSelect
  id="accountType"
  name="accountType"
  value={value}
  onChange={onChange}
  label="Loại tài khoản"
  options={[
    { value: 'personal', label: 'Cá nhân' },
    { value: 'business', label: 'Doanh nghiệp' }
  ]}
/>
```

### PrimaryButton
Button chính cho actions.
```tsx
<PrimaryButton
  type="submit"
  loading={isLoading}
  loadingText="Đang xử lý..."
>
  Đăng nhập
</PrimaryButton>
```

### SocialLoginButton
Button đăng nhập Google.
```tsx
<SocialLoginButton onClick={handleGoogleLogin} />
```

### FormDivider
Phân cách giữa các sections.
```tsx
<FormDivider text="hoặc" />
```

### ErrorMessage
Hiển thị thông báo lỗi.
```tsx
<ErrorMessage message="Lỗi đăng nhập" />
```

## Import

```tsx
import {
  AuthCard,
  AuthHeader,
  FormInput,
  PasswordInput,
  FormSelect,
  PrimaryButton,
  SocialLoginButton,
  FormDivider,
  ErrorMessage
} from '@/component/ui';
``` 