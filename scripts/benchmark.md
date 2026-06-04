# Benchmarks

> This benchmark is using different content (salted) in every iterations.

## complex

```text
front-matter × 4,600 ops/sec ±0.19% (4,549 runs sampled)
gray-matter × 3,758 ops/sec ±0.30% (3,598 runs sampled)
gray-matter+yaml_disabled × 11,322 ops/sec ±0.24% (10,770 runs sampled)
raw-matter × 225,050 ops/sec ±0.04% (198,976 runs sampled)
raw-matter+yaml × 6,628 ops/sec ±0.12% (6,570 runs sampled)
```

## empty

```text
front-matter × 2,958,938 ops/sec ±0.03% (2,271,778 runs sampled)
gray-matter × 138,152 ops/sec ±0.06% (116,479 runs sampled)
gray-matter+yaml_disabled × 163,598 ops/sec ±0.05% (143,963 runs sampled)
raw-matter × 8,089,924 ops/sec ±0.04% (5,802,304 runs sampled)
raw-matter+yaml × 8,312,004 ops/sec ±0.04% (6,717,842 runs sampled)
```

## matter

```text
front-matter × 105,242 ops/sec ±0.03% (102,988 runs sampled)
gray-matter × 45,654 ops/sec ±0.10% (39,938 runs sampled)
gray-matter+yaml_disabled × 79,246 ops/sec ±0.08% (71,856 runs sampled)
raw-matter × 1,502,210 ops/sec ±0.02% (1,363,020 runs sampled)
raw-matter+yaml × 150,535 ops/sec ±0.03% (123,392 runs sampled)
```

## no-content

```text
front-matter × 107,195 ops/sec ±0.03% (104,322 runs sampled)
gray-matter × 45,737 ops/sec ±0.10% (39,760 runs sampled)
gray-matter+yaml_disabled × 79,398 ops/sec ±0.08% (72,162 runs sampled)
raw-matter × 1,482,480 ops/sec ±0.02% (1,435,746 runs sampled)
raw-matter+yaml × 149,733 ops/sec ±0.03% (144,837 runs sampled)
```

## no-matter

```text
front-matter × 1,205,152 ops/sec ±0.03% (1,162,111 runs sampled)
gray-matter × 101,577 ops/sec ±0.07% (85,882 runs sampled)
gray-matter+yaml_disabled × 99,288 ops/sec ±0.15% (52,045 runs sampled)
raw-matter × 2,346,160 ops/sec ±0.04% (2,067,001 runs sampled)
raw-matter+yaml × 2,490,301 ops/sec ±0.03% (2,285,589 runs sampled)
```
