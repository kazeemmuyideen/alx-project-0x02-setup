
// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// interfaces/index.ts
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
