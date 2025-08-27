# Details

Date : 2025-08-27 00:01:26

Directory f:\\Front-End\\000-projetos\\expense-plan-server

Total : 110 files,  4614 codes, 14 comments, 675 blanks, all 5303 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [package-lock.json](/package-lock.json) | JSON | 1,854 | 0 | 1 | 1,855 |
| [package.json](/package.json) | JSON | 29 | 0 | 1 | 30 |
| [prisma/schema.prisma](/prisma/schema.prisma) | Prisma | 130 | 8 | 18 | 156 |
| [src/config.js](/src/config.js) | JavaScript | 10 | 0 | 3 | 13 |
| [src/hooks/authPreHandler.js](/src/hooks/authPreHandler.js) | JavaScript | 23 | 0 | 7 | 30 |
| [src/hooks/isUserMovementInRangePreHandler.js](/src/hooks/isUserMovementInRangePreHandler.js) | JavaScript | 9 | 0 | 4 | 13 |
| [src/hooks/movementCategoryExistsPreHandler.js](/src/hooks/movementCategoryExistsPreHandler.js) | JavaScript | 26 | 0 | 7 | 33 |
| [src/hooks/userMonthlyMovementExistsPreHandler.js](/src/hooks/userMonthlyMovementExistsPreHandler.js) | JavaScript | 9 | 0 | 3 | 12 |
| [src/hooks/userMovementExistsPreHandler.js](/src/hooks/userMovementExistsPreHandler.js) | JavaScript | 9 | 0 | 3 | 12 |
| [src/hooks/userMovementTypeBelongToSavingPreHandler.js](/src/hooks/userMovementTypeBelongToSavingPreHandler.js) | JavaScript | 18 | 0 | 5 | 23 |
| [src/hooks/userMovementTypeExistsPreHandler.js](/src/hooks/userMovementTypeExistsPreHandler.js) | JavaScript | 9 | 0 | 3 | 12 |
| [src/hooks/userSavingExistsPreHandler.js](/src/hooks/userSavingExistsPreHandler.js) | JavaScript | 9 | 0 | 3 | 12 |
| [src/index.js](/src/index.js) | JavaScript | 61 | 4 | 17 | 82 |
| [src/plugins/prisma.js](/src/plugins/prisma.js) | JavaScript | 3 | 0 | 2 | 5 |
| [src/routes/history/endpoints.js](/src/routes/history/endpoints.js) | JavaScript | 9 | 0 | 3 | 12 |
| [src/routes/history/getUserHistoryDates/documentationSchema.js](/src/routes/history/getUserHistoryDates/documentationSchema.js) | JavaScript | 27 | 0 | 3 | 30 |
| [src/routes/history/getUserHistoryDates/handler.js](/src/routes/history/getUserHistoryDates/handler.js) | JavaScript | 14 | 0 | 9 | 23 |
| [src/routes/history/getUserHistoryDates/requestValidators/paramsSchema.js](/src/routes/history/getUserHistoryDates/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 4 | 10 |
| [src/routes/monthlyMovement/createUserMonthlyMovement/documentationSchema.js](/src/routes/monthlyMovement/createUserMonthlyMovement/documentationSchema.js) | JavaScript | 36 | 0 | 3 | 39 |
| [src/routes/monthlyMovement/createUserMonthlyMovement/handler.js](/src/routes/monthlyMovement/createUserMonthlyMovement/handler.js) | JavaScript | 29 | 0 | 11 | 40 |
| [src/routes/monthlyMovement/createUserMonthlyMovement/requestValidators/bodySchema.js](/src/routes/monthlyMovement/createUserMonthlyMovement/requestValidators/bodySchema.js) | JavaScript | 14 | 0 | 4 | 18 |
| [src/routes/monthlyMovement/createUserMonthlyMovement/requestValidators/paramsSchema.js](/src/routes/monthlyMovement/createUserMonthlyMovement/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 4 | 10 |
| [src/routes/monthlyMovement/deleteUserMonthlyMovement/documentationSchema.js](/src/routes/monthlyMovement/deleteUserMonthlyMovement/documentationSchema.js) | JavaScript | 30 | 0 | 3 | 33 |
| [src/routes/monthlyMovement/deleteUserMonthlyMovement/handler.js](/src/routes/monthlyMovement/deleteUserMonthlyMovement/handler.js) | JavaScript | 15 | 0 | 10 | 25 |
| [src/routes/monthlyMovement/deleteUserMonthlyMovement/requestValidators/paramsSchema.js](/src/routes/monthlyMovement/deleteUserMonthlyMovement/requestValidators/paramsSchema.js) | JavaScript | 10 | 0 | 4 | 14 |
| [src/routes/monthlyMovement/endpoints.js](/src/routes/monthlyMovement/endpoints.js) | JavaScript | 35 | 0 | 10 | 45 |
| [src/routes/monthlyMovement/getAllUserMonthlyMovements/documentationSchema.js](/src/routes/monthlyMovement/getAllUserMonthlyMovements/documentationSchema.js) | JavaScript | 29 | 0 | 3 | 32 |
| [src/routes/monthlyMovement/getAllUserMonthlyMovements/handler.js](/src/routes/monthlyMovement/getAllUserMonthlyMovements/handler.js) | JavaScript | 14 | 0 | 9 | 23 |
| [src/routes/monthlyMovement/getAllUserMonthlyMovements/requestValidators/paramsSchema.js](/src/routes/monthlyMovement/getAllUserMonthlyMovements/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 4 | 10 |
| [src/routes/monthlyMovement/updateUserMonthlyMovement/documentationSchema.js](/src/routes/monthlyMovement/updateUserMonthlyMovement/documentationSchema.js) | JavaScript | 43 | 0 | 3 | 46 |
| [src/routes/monthlyMovement/updateUserMonthlyMovement/handler.js](/src/routes/monthlyMovement/updateUserMonthlyMovement/handler.js) | JavaScript | 30 | 0 | 10 | 40 |
| [src/routes/monthlyMovement/updateUserMonthlyMovement/requestValidators/bodySchema.js](/src/routes/monthlyMovement/updateUserMonthlyMovement/requestValidators/bodySchema.js) | JavaScript | 15 | 0 | 4 | 19 |
| [src/routes/monthlyMovement/updateUserMonthlyMovement/requestValidators/paramsSchema.js](/src/routes/monthlyMovement/updateUserMonthlyMovement/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 4 | 10 |
| [src/routes/movementCategory/endpoints.js](/src/routes/movementCategory/endpoints.js) | JavaScript | 9 | 0 | 3 | 12 |
| [src/routes/movementCategory/getAllMovementCategories/documentationSchema.js](/src/routes/movementCategory/getAllMovementCategories/documentationSchema.js) | JavaScript | 23 | 0 | 3 | 26 |
| [src/routes/movementCategory/getAllMovementCategories/handler.js](/src/routes/movementCategory/getAllMovementCategories/handler.js) | JavaScript | 11 | 0 | 7 | 18 |
| [src/routes/movementType/createUserMovementType/documentationSchema.js](/src/routes/movementType/createUserMovementType/documentationSchema.js) | JavaScript | 37 | 0 | 3 | 40 |
| [src/routes/movementType/createUserMovementType/handler.js](/src/routes/movementType/createUserMovementType/handler.js) | JavaScript | 30 | 0 | 11 | 41 |
| [src/routes/movementType/createUserMovementType/requestValidators/bodySchema.js](/src/routes/movementType/createUserMovementType/requestValidators/bodySchema.js) | JavaScript | 12 | 0 | 4 | 16 |
| [src/routes/movementType/createUserMovementType/requestValidators/paramsSchema.js](/src/routes/movementType/createUserMovementType/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 4 | 10 |
| [src/routes/movementType/deleteUserMovementType/documentationSchema.js](/src/routes/movementType/deleteUserMovementType/documentationSchema.js) | JavaScript | 32 | 0 | 3 | 35 |
| [src/routes/movementType/deleteUserMovementType/handler.js](/src/routes/movementType/deleteUserMovementType/handler.js) | JavaScript | 15 | 0 | 9 | 24 |
| [src/routes/movementType/deleteUserMovementType/requestValidators/paramsSchema.js](/src/routes/movementType/deleteUserMovementType/requestValidators/paramsSchema.js) | JavaScript | 10 | 0 | 4 | 14 |
| [src/routes/movementType/endpoints.js](/src/routes/movementType/endpoints.js) | JavaScript | 35 | 0 | 10 | 45 |
| [src/routes/movementType/getAllUserMovementTypes/documentationSchema.js](/src/routes/movementType/getAllUserMovementTypes/documentationSchema.js) | JavaScript | 30 | 0 | 3 | 33 |
| [src/routes/movementType/getAllUserMovementTypes/handler.js](/src/routes/movementType/getAllUserMovementTypes/handler.js) | JavaScript | 7 | 0 | 5 | 12 |
| [src/routes/movementType/getAllUserMovementTypes/requestValidators/paramsSchema.js](/src/routes/movementType/getAllUserMovementTypes/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 4 | 10 |
| [src/routes/movementType/updateUserMovementType/documentationSchema.js](/src/routes/movementType/updateUserMovementType/documentationSchema.js) | JavaScript | 43 | 0 | 3 | 46 |
| [src/routes/movementType/updateUserMovementType/handler.js](/src/routes/movementType/updateUserMovementType/handler.js) | JavaScript | 30 | 0 | 10 | 40 |
| [src/routes/movementType/updateUserMovementType/requestValidators/bodySchema.js](/src/routes/movementType/updateUserMovementType/requestValidators/bodySchema.js) | JavaScript | 13 | 0 | 4 | 17 |
| [src/routes/movementType/updateUserMovementType/requestValidators/paramsSchema.js](/src/routes/movementType/updateUserMovementType/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 4 | 10 |
| [src/routes/movement/createUserMovement/documentationSchema.js](/src/routes/movement/createUserMovement/documentationSchema.js) | JavaScript | 36 | 0 | 3 | 39 |
| [src/routes/movement/createUserMovement/handler.js](/src/routes/movement/createUserMovement/handler.js) | JavaScript | 28 | 0 | 11 | 39 |
| [src/routes/movement/createUserMovement/requestValidators/bodySchema.js](/src/routes/movement/createUserMovement/requestValidators/bodySchema.js) | JavaScript | 12 | 0 | 4 | 16 |
| [src/routes/movement/createUserMovement/requestValidators/paramsSchema.js](/src/routes/movement/createUserMovement/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 4 | 10 |
| [src/routes/movement/deleteUserMovement/documentationSchema.js](/src/routes/movement/deleteUserMovement/documentationSchema.js) | JavaScript | 31 | 0 | 3 | 34 |
| [src/routes/movement/deleteUserMovement/handler.js](/src/routes/movement/deleteUserMovement/handler.js) | JavaScript | 20 | 0 | 9 | 29 |
| [src/routes/movement/deleteUserMovement/requestValidators/paramsSchema.js](/src/routes/movement/deleteUserMovement/requestValidators/paramsSchema.js) | JavaScript | 10 | 0 | 4 | 14 |
| [src/routes/movement/endpoints.js](/src/routes/movement/endpoints.js) | JavaScript | 40 | 0 | 10 | 50 |
| [src/routes/movement/getUserMovementsByMonth/documentationSchema.js](/src/routes/movement/getUserMovementsByMonth/documentationSchema.js) | JavaScript | 38 | 0 | 3 | 41 |
| [src/routes/movement/getUserMovementsByMonth/handler.js](/src/routes/movement/getUserMovementsByMonth/handler.js) | JavaScript | 23 | 0 | 10 | 33 |
| [src/routes/movement/getUserMovementsByMonth/requestValidators/paramsSchema.js](/src/routes/movement/getUserMovementsByMonth/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 2 | 8 |
| [src/routes/movement/getUserMovementsByMonth/requestValidators/querySchema.js](/src/routes/movement/getUserMovementsByMonth/requestValidators/querySchema.js) | JavaScript | 10 | 0 | 4 | 14 |
| [src/routes/movement/updateUserMovement/documentationSchema.js](/src/routes/movement/updateUserMovement/documentationSchema.js) | JavaScript | 37 | 0 | 3 | 40 |
| [src/routes/movement/updateUserMovement/handler.js](/src/routes/movement/updateUserMovement/handler.js) | JavaScript | 29 | 0 | 10 | 39 |
| [src/routes/movement/updateUserMovement/requestValidators/bodySchema.js](/src/routes/movement/updateUserMovement/requestValidators/bodySchema.js) | JavaScript | 13 | 0 | 3 | 16 |
| [src/routes/movement/updateUserMovement/requestValidators/paramsSchema.js](/src/routes/movement/updateUserMovement/requestValidators/paramsSchema.js) | JavaScript | 4 | 0 | 4 | 8 |
| [src/routes/savingMovement/createSavingMovement/documentationSchema.js](/src/routes/savingMovement/createSavingMovement/documentationSchema.js) | JavaScript | 38 | 0 | 3 | 41 |
| [src/routes/savingMovement/createSavingMovement/handler.js](/src/routes/savingMovement/createSavingMovement/handler.js) | JavaScript | 28 | 0 | 11 | 39 |
| [src/routes/savingMovement/createSavingMovement/requestValidators/bodySchema.js](/src/routes/savingMovement/createSavingMovement/requestValidators/bodySchema.js) | JavaScript | 11 | 0 | 3 | 14 |
| [src/routes/savingMovement/createSavingMovement/requestValidators/paramsSchema.js](/src/routes/savingMovement/createSavingMovement/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/routes/savingMovement/endpoints.js](/src/routes/savingMovement/endpoints.js) | JavaScript | 24 | 0 | 6 | 30 |
| [src/routes/savingMovement/getSavingMovementsPerSaving/documentationSchema.js](/src/routes/savingMovement/getSavingMovementsPerSaving/documentationSchema.js) | JavaScript | 33 | 0 | 3 | 36 |
| [src/routes/savingMovement/getSavingMovementsPerSaving/handler.js](/src/routes/savingMovement/getSavingMovementsPerSaving/handler.js) | JavaScript | 14 | 0 | 8 | 22 |
| [src/routes/savingMovement/getSavingMovementsPerSaving/requestValidators/paramsSchema.js](/src/routes/savingMovement/getSavingMovementsPerSaving/requestValidators/paramsSchema.js) | JavaScript | 10 | 0 | 3 | 13 |
| [src/routes/saving/createUserSaving/documentationSchema.js](/src/routes/saving/createUserSaving/documentationSchema.js) | JavaScript | 34 | 0 | 3 | 37 |
| [src/routes/saving/createUserSaving/handler.js](/src/routes/saving/createUserSaving/handler.js) | JavaScript | 26 | 0 | 11 | 37 |
| [src/routes/saving/createUserSaving/requestValidators/bodySchema.js](/src/routes/saving/createUserSaving/requestValidators/bodySchema.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/routes/saving/createUserSaving/requestValidators/paramsSchema.js](/src/routes/saving/createUserSaving/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/routes/saving/deleteUserSaving/documentationSchema.js](/src/routes/saving/deleteUserSaving/documentationSchema.js) | JavaScript | 31 | 0 | 3 | 34 |
| [src/routes/saving/deleteUserSaving/handler.js](/src/routes/saving/deleteUserSaving/handler.js) | JavaScript | 15 | 0 | 8 | 23 |
| [src/routes/saving/deleteUserSaving/requestValidators/paramsSchema.js](/src/routes/saving/deleteUserSaving/requestValidators/paramsSchema.js) | JavaScript | 10 | 0 | 3 | 13 |
| [src/routes/saving/endpoints.js](/src/routes/saving/endpoints.js) | JavaScript | 30 | 0 | 10 | 40 |
| [src/routes/saving/getAllUserSavings/documentationSchema.js](/src/routes/saving/getAllUserSavings/documentationSchema.js) | JavaScript | 30 | 0 | 3 | 33 |
| [src/routes/saving/getAllUserSavings/handler.js](/src/routes/saving/getAllUserSavings/handler.js) | JavaScript | 14 | 0 | 7 | 21 |
| [src/routes/saving/getAllUserSavings/requestValidators/paramsSchema.js](/src/routes/saving/getAllUserSavings/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/routes/saving/updateUserSaving/documentationSchema.js](/src/routes/saving/updateUserSaving/documentationSchema.js) | JavaScript | 35 | 0 | 3 | 38 |
| [src/routes/saving/updateUserSaving/handler.js](/src/routes/saving/updateUserSaving/handler.js) | JavaScript | 27 | 0 | 10 | 37 |
| [src/routes/saving/updateUserSaving/requestValidators/bodySchema.js](/src/routes/saving/updateUserSaving/requestValidators/bodySchema.js) | JavaScript | 10 | 0 | 3 | 13 |
| [src/routes/saving/updateUserSaving/requestValidators/paramsSchema.js](/src/routes/saving/updateUserSaving/requestValidators/paramsSchema.js) | JavaScript | 6 | 0 | 3 | 9 |
| [src/services/history.js](/src/services/history.js) | JavaScript | 29 | 0 | 9 | 38 |
| [src/services/monthlyMovements.js](/src/services/monthlyMovements.js) | JavaScript | 106 | 0 | 18 | 124 |
| [src/services/movement.js](/src/services/movement.js) | JavaScript | 108 | 0 | 17 | 125 |
| [src/services/movementCategory.js](/src/services/movementCategory.js) | JavaScript | 6 | 0 | 4 | 10 |
| [src/services/movementType.js](/src/services/movementType.js) | JavaScript | 107 | 0 | 15 | 122 |
| [src/services/saving.js](/src/services/saving.js) | JavaScript | 116 | 1 | 28 | 145 |
| [src/services/savingMovement.js](/src/services/savingMovement.js) | JavaScript | 144 | 0 | 21 | 165 |
| [src/utils/createExistsPreHandler.js](/src/utils/createExistsPreHandler.js) | JavaScript | 28 | 1 | 9 | 38 |
| [src/utils/doesMovementCategoryExist.js](/src/utils/doesMovementCategoryExist.js) | JavaScript | 19 | 0 | 7 | 26 |
| [src/utils/doesUserMonthlyMovementExist.js](/src/utils/doesUserMonthlyMovementExist.js) | JavaScript | 25 | 0 | 6 | 31 |
| [src/utils/doesUserMovementExist.js](/src/utils/doesUserMovementExist.js) | JavaScript | 21 | 0 | 6 | 27 |
| [src/utils/doesUserMovementTypeBelongToSaving.js](/src/utils/doesUserMovementTypeBelongToSaving.js) | JavaScript | 30 | 0 | 7 | 37 |
| [src/utils/doesUserMovementTypeExist.js](/src/utils/doesUserMovementTypeExist.js) | JavaScript | 21 | 0 | 6 | 27 |
| [src/utils/doesUserSavingExist.js](/src/utils/doesUserSavingExist.js) | JavaScript | 21 | 0 | 6 | 27 |
| [src/utils/getError.js](/src/utils/getError.js) | JavaScript | 17 | 0 | 4 | 21 |
| [src/utils/getUserIdFromToken.js](/src/utils/getUserIdFromToken.js) | JavaScript | 27 | 0 | 7 | 34 |
| [src/utils/isUserMovementInCurrentMonth.js](/src/utils/isUserMovementInCurrentMonth.js) | JavaScript | 22 | 0 | 8 | 30 |
| [src/utils/validateRequestSchema.js](/src/utils/validateRequestSchema.js) | JavaScript | 17 | 0 | 8 | 25 |
| [src/validators/common.js](/src/validators/common.js) | JavaScript | 25 | 0 | 7 | 32 |
| [src/validators/movement.js](/src/validators/movement.js) | JavaScript | 4 | 0 | 3 | 7 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)