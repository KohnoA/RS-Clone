import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
<<<<<<< HEAD:src/store/sevices/foodService.api.ts
import * as API from '../../constants/foodApi';
import { IFoodApi } from '../../models/IFood';
import { IRecipes } from '../../models/IRecipes';
import { IRecupesSearch } from '../../types/types';

interface IType {
  type: string,
  calories: string,
}
=======
import * as API from '../constants/foodApi';
import { IFoodApi } from '../models/IFood';
import { IRecipes } from '../models/IRecipes';
import { IRecipesData, IRecupesSearch } from '../types/types';
>>>>>>> develop:src/sevices/foodService.api.ts

export const foodAPI = createApi({
  reducerPath: 'foodAPI',
  baseQuery: fetchBaseQuery({ baseUrl: `${API.DOMAIN}` }),
  endpoints: (build) => ({

    fetchAllFood: build.query<IFoodApi, number>({
      query: (session?) => ({
        url: `/${API.FOOD}`,
        params: {
            session: session,
            ['app_id']: API.ID_FOOD,
            ['app_key']: API.API_KEY_FOOD,
        },
      }),
    }),

    fetchRecipesStart: build.query<IRecipes, string>({
        query: () => ({
            url: `/${API.RECIPES}`,
            params: {
                type: API.TYPE,
                ['app_id']: API.ID_RECIPES,
                ['app_key']: API.API_KEY_RECIPES,
                imageSize: API.IMAGE_SIZE,
                random: true,
            },
        }),
    }),

    fetchFavoriteRecipes: build.query<IRecipesData, string>({
        query: (id: string) => ({
            url: `/${API.RECIPES}/${id}`,
            params: {
                type: API.TYPE,
                ['app_id']: API.ID_RECIPES,
                ['app_key']: API.API_KEY_RECIPES,
            },
        }),
    }),

    fetchRecipesWithParams: build.query<IRecipes, string>({
        query: (type) => ({
            url: `/${API.RECIPES}`,
            params: {
                type: API.TYPE,
                ['app_id']: API.ID_RECIPES,
                ['app_key']: API.API_KEY_RECIPES,
                imageSize: API.IMAGE_SIZE,
                mealType: type,
            },
        }),
    }),

    fetchRecipesWithParamsRandom: build.query<IRecipes, IType>({
      query: ({type, calories}) => ({
          url: `/${API.RECIPES}`,
          params: {
              type: API.TYPE,
              ['app_id']: API.ID_RECIPES,
              ['app_key']: API.API_KEY_RECIPES,
              random: true,
              mealType: type,
              calories: calories,
          },
      }),
  }),

    fetchRecipes: build.query<IRecupesSearch, string>({
      query:(recipe: string) => ({
        url: `/${API.RECIPES}`,
        params: {
          type: API.TYPE,
          q: recipe,
          ['app_id']: API.ID_RECIPES,
          ['app_key']: API.API_KEY_RECIPES,
        },
      }),
    }),

  }),
});

<<<<<<< HEAD:src/store/sevices/foodService.api.ts
export const {useFetchAllFoodQuery, useFetchRecipesQuery, useFetchRecipesStartQuery, useFetchRecipesWithParamsQuery} = foodAPI
=======
export const {useFetchFavoriteRecipesQuery} = foodAPI
>>>>>>> develop:src/sevices/foodService.api.ts
