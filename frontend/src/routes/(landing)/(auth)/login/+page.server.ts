import type { Actions } from '@sveltejs/kit';
import { client, api } from '@/lib/convexClient';

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();

    const usernameOrEmail = await data.get('usernameOrEmail');
    const password = await data.get('password');

    if (!usernameOrEmail || !password) return { success: false };

    const loginResult = await client.mutation(api.auth.login, {
      usernameOrEmail: usernameOrEmail as string,
      password: password as string
    });

    // Set Cookie (For SvelteKit Protected Routes)
    if (loginResult && loginResult?.session?.sessionId) {
      event.cookies.set('auth', loginResult.session.sessionId, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: loginResult.session.maxAge
      });
    }

    return loginResult;
  }
};
