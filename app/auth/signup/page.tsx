'use client';

import { SignUpForm } from '@/components/auth/SignUpForm';
import { AuthLayout } from '@/components/auth/AuthLayout';

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join Cureसाथी to access affordable healthcare"
    >
      <SignUpForm />
    </AuthLayout>
  );
}