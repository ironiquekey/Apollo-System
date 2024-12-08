export default defineNuxtRouteMiddleware((to, from) => {
    const validatedRoutes = ['/launches', '/rockets', '/favorites', '/'];
  
    if (!validatedRoutes.includes(to.path)) {
      return navigateTo('/launches');
    }
  });