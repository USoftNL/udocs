---
id: Creating_USoft_Benchmark_tables
---

# Creating USoft Benchmark tables

To create USoft Benchmark repository tables:

1. Make sure you have a USoft Binder file in which the Database Properties sheet points to the development repository.

2. Make sure this USoft Binder file has a BenchMark item. If it does not, create it by using Item, New.

3. Right-click this item and choose Create Tables.

This creates the repository tables required to work with USoft BenchMark. These tables are recognisable because their names start with the T_TEST_... prefix.

This also authorises the Owner as a user of the USTESTER (= USoft BenchMark) application. You can see this by looking in authorization tables in USoft Authorizer.