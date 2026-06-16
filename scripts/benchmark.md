# Benchmarks

## complex

```text
front-matter × 4,910 ops/sec ±0.19% (4,860 runs sampled)
gray-matter × 4,707 ops/sec ±0.22% (4,663 runs sampled)
gray-matter+yaml_disabled × 26,941 ops/sec ±0.15% (26,176 runs sampled)
split-matter × 364,018 ops/sec ±0.02% (360,938 runs sampled)
split-matter+yaml × 6,475 ops/sec ±0.15% (6,419 runs sampled)
```

## empty

```text
front-matter × 7,242,276 ops/sec ±0.06% (4,541,276 runs sampled)
gray-matter × 8,788,963 ops/sec ±0.02% (9,396,310 runs sampled)
gray-matter+yaml_disabled × 8,557,970 ops/sec ±0.03% (9,041,326 runs sampled)
split-matter × 9,322,846 ops/sec ±0.02% (10,474,686 runs sampled)
split-matter+yaml × 10,246,648 ops/sec ±0.02% (12,023,582 runs sampled)
```

## matter

```text
front-matter × 117,366 ops/sec ±0.03% (115,285 runs sampled)
gray-matter × 61,175 ops/sec ±0.07% (59,616 runs sampled)
gray-matter+yaml_disabled × 136,662 ops/sec ±0.06% (130,796 runs sampled)
split-matter × 3,777,814 ops/sec ±0.06% (3,109,724 runs sampled)
split-matter+yaml × 158,060 ops/sec ±0.03% (137,299 runs sampled)
```

## no-content

```text
front-matter × 120,989 ops/sec ±0.04% (119,092 runs sampled)
gray-matter × 60,032 ops/sec ±0.07% (58,635 runs sampled)
gray-matter+yaml_disabled × 131,554 ops/sec ±0.06% (126,858 runs sampled)
split-matter × 4,630,794 ops/sec ±0.07% (3,484,083 runs sampled)
split-matter+yaml × 157,423 ops/sec ±0.03% (126,585 runs sampled)
```

## no-matter

```text
front-matter × 3,460,217 ops/sec ±0.06% (2,832,980 runs sampled)
gray-matter × 182,553 ops/sec ±0.05% (146,539 runs sampled)
gray-matter+yaml_disabled × 180,187 ops/sec ±0.04% (174,686 runs sampled)
split-matter × 9,131,613 ops/sec ±0.02% (10,082,251 runs sampled)
split-matter+yaml × 9,791,559 ops/sec ±0.02% (11,213,838 runs sampled)
```
