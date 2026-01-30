import { useSignUpMutation } from '../../api/authApi'


export function useSignUp() {
  const [signUp, { isLoading, isSuccess, isError, error }] = useSignUpMutation()

  const handleSignUp = async (data) => {
    await signUp(data).unwrap()
  }

  return { signUp: handleSignUp, isLoading, isSuccess, isError, error }
}
