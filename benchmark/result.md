# Benchmarks

> This benchmark is using different content (salted) in every iterations.

## complex

```text
front-matter × 4,596 ops/sec ±0.18% (4,411 runs sampled)
gray-matter × 3,908 ops/sec ±0.30% (3,668 runs sampled)
gray-matter+yaml_disabled × 10,911 ops/sec ±0.28% (10,006 runs sampled)
raw-matter × 203,290 ops/sec ±0.05% (151,670 runs sampled)
raw-matter+yaml × 6,650 ops/sec ±0.12% (6,556 runs sampled)
```

## empty

```text
front-matter × 2,559,600 ops/sec ±0.04% (1,912,289 runs sampled)
gray-matter × 126,878 ops/sec ±0.05% (115,507 runs sampled)
gray-matter+yaml_disabled × 143,191 ops/sec ±0.05% (134,321 runs sampled)
raw-matter × 7,761,404 ops/sec ±0.05% (5,320,794 runs sampled)
raw-matter+yaml × 8,274,966 ops/sec ±0.05% (4,968,436 runs sampled)
```

## matter

```text
front-matter × 101,892 ops/sec ±0.07% (93,132 runs sampled)
gray-matter × 43,414 ops/sec ±0.13% (38,256 runs sampled)
gray-matter+yaml_disabled × 74,091 ops/sec ±0.13% (67,456 runs sampled)
raw-matter × 1,143,757 ops/sec ±0.03% (993,336 runs sampled)
raw-matter+yaml × 143,532 ops/sec ±0.04% (135,980 runs sampled)
```

## no-content

```text
front-matter × 99,071 ops/sec ±0.07% (91,660 runs sampled)
gray-matter × 45,547 ops/sec ±0.15% (39,959 runs sampled)
gray-matter+yaml_disabled × 80,421 ops/sec ±0.12% (70,668 runs sampled)
raw-matter × 1,126,613 ops/sec ±0.04% (1,038,081 runs sampled)
raw-matter+yaml × 141,496 ops/sec ±0.03% (135,179 runs sampled)
```

## no-matter

```text
front-matter × 1,114,577 ops/sec ±0.04% (958,091 runs sampled)
gray-matter × 102,836 ops/sec ±0.09% (87,897 runs sampled)
gray-matter+yaml_disabled × 103,723 ops/sec ±0.08% (95,579 runs sampled)
raw-matter × 2,249,631 ops/sec ±0.03% (2,064,672 runs sampled)
raw-matter+yaml × 2,278,073 ops/sec ±0.04% (1,978,567 runs sampled)
```
