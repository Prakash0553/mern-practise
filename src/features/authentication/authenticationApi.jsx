import { mainApi } from '../../app/mainApi';




export const authenticationApi = mainApi.injectEndpoints({

  endpoints: (builder) => ({

    userLogin: builder.mutation({
      query: (val) => ({
        url: '/users/login',
        body: val,
        method: 'POST'
      })
    }),

    userSignUp: builder.mutation({
      query: (val) => ({
        url: '/users/register',
        body: val,
        method: 'POST'
      })
    }),


  })

});

export const { useUserLoginMutation, useUserSignUpMutation} = authenticationApi;