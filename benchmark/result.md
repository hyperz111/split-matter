# Benchmarks

> This benchmark is using different content (salted) in every iterations.

## complex

```text
front-matter × 4,638 ops/sec ±0.20% (4,579 runs sampled)
gray-matter × 3,755 ops/sec ±0.32% (3,577 runs sampled)
gray-matter+yaml_disabled × 10,331 ops/sec ±0.25% (9,674 runs sampled)
raw-matter × 226,181 ops/sec ±0.04% (199,272 runs sampled)
raw-matter+yaml × 6,836 ops/sec ±0.11% (6,550 runs sampled)
```

## empty

```text
front-matter × 2,969,987 ops/sec ±0.03% (2,231,970 runs sampled)
gray-matter × 144,540 ops/sec ±0.06% (108,538 runs sampled)
gray-matter+yaml_disabled × 168,260 ops/sec ±0.05% (143,531 runs sampled)
raw-matter × 8,126,239 ops/sec ±0.04% (5,703,657 runs sampled)
raw-matter+yaml × 8,202,851 ops/sec ±0.04% (6,013,595 runs sampled)
```

## matter

```text
front-matter × 110,334 ops/sec ±0.03% (108,133 runs sampled)
gray-matter × 46,468 ops/sec ±0.11% (40,101 runs sampled)
gray-matter+yaml_disabled × 81,772 ops/sec ±0.10% (72,626 runs sampled)
raw-matter × 1,403,210 ops/sec ±0.03% (1,286,899 runs sampled)
raw-matter+yaml × 152,386 ops/sec ±0.03% (142,568 runs sampled)
```

## no-content

```text
front-matter × 112,863 ops/sec ±0.03% (109,703 runs sampled)
gray-matter × 46,258 ops/sec ±0.12% (40,282 runs sampled)
gray-matter+yaml_disabled × 80,016 ops/sec ±0.14% (49,431 runs sampled)
raw-matter × 1,381,725 ops/sec ±0.03% (1,327,642 runs sampled)
raw-matter+yaml × 151,641 ops/sec ±0.03% (125,681 runs sampled)
```

## no-matter

```text
front-matter × 1,282,395 ops/sec ±0.02% (1,242,311 runs sampled)
gray-matter × 108,087 ops/sec ±0.07% (84,005 runs sampled)
gray-matter+yaml_disabled × 107,031 ops/sec ±0.07% (92,474 runs sampled)
raw-matter × 2,417,223 ops/sec ±0.03% (2,127,620 runs sampled)
raw-matter+yaml × 2,509,696 ops/sec ±0.03% (2,004,531 runs sampled)
```
