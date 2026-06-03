# Benchmarks

> This benchmark is using different content (salted) in every iterations.

## complex

```text
front-matter × 4,732 ops/sec ±54% (4463 runs sampled)
gray-matter × 3,982 ops/sec ±115% (3640 runs sampled)
gray-matter+yaml_disabled × 11,294 ops/sec ±488% (10069 runs sampled)
raw-matter × 203,128 ops/sec ±10,001% (151341 runs sampled)
raw-matter+yaml × 6,889 ops/sec ±70% (6681 runs sampled)
```

## empty

```text
front-matter × 3,246,753 ops/sec ±10,576% (2107264 runs sampled)
gray-matter × 130,005 ops/sec ±3,790% (114630 runs sampled)
gray-matter+yaml_disabled × 149,410 ops/sec ±3,542% (109579 runs sampled)
raw-matter × 4,347,826 ops/sec ±1,101,073% (5826507 runs sampled)
raw-matter+yaml × 4,347,826 ops/sec ±766,435% (3581391 runs sampled)
```

## matter

```text
front-matter × 97,742 ops/sec ±6,833% (96355 runs sampled)
gray-matter × 44,675 ops/sec ±1,100% (36608 runs sampled)
gray-matter+yaml_disabled × 75,143 ops/sec ±5,607% (64650 runs sampled)
raw-matter × 1,443,001 ops/sec ±183,015% (1087136 runs sampled)
raw-matter+yaml × 149,410 ops/sec ±1,699% (137177 runs sampled)
```

## no-content

```text
front-matter × 112,070 ops/sec ±3,728% (96905 runs sampled)
gray-matter × 47,101 ops/sec ±1,225% (41761 runs sampled)
gray-matter+yaml_disabled × 81,248 ops/sec ±2,085% (70266 runs sampled)
raw-matter × 1,182,033 ops/sec ±182,033% (1105260 runs sampled)
raw-matter+yaml × 147,710 ops/sec ±1,640% (135961 runs sampled)
```

## no-matter

```text
front-matter × 1,182,033 ops/sec ±260,968% (1071226 runs sampled)
gray-matter × 108,331 ops/sec ±3,739% (93383 runs sampled)
gray-matter+yaml_disabled × 108,331 ops/sec ±3,727% (92594 runs sampled)
raw-matter × 1,858,736 ops/sec ±235,359% (1929445 runs sampled)
raw-matter+yaml × 2,597,403 ops/sec ±659,926% (1944588 runs sampled)
```
