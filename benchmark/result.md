# Benchmarks

> This benchmark is using different content (salted) in every iterations.

## complex

```text
front-matter × 4,703 ops/sec ±48% (4462 runs sampled)
gray-matter × 4,031 ops/sec ±143% (3649 runs sampled)
gray-matter+yaml_disabled × 11,607 ops/sec ±520% (10475 runs sampled)
raw-matter × 188,395 ops/sec ±7,857% (125753 runs sampled)
raw-matter+yaml × 6,803 ops/sec ±60% (6516 runs sampled)
```

## empty

```text
front-matter × 866,551 ops/sec ±133,449% (680202 runs sampled)
gray-matter × 117,123 ops/sec ±4,078% (100356 runs sampled)
gray-matter+yaml_disabled × 116,077 ops/sec ±4,289% (105941 runs sampled)
raw-matter × 1,182,033 ops/sec ±98,609% (1117289 runs sampled)
raw-matter+yaml × 1,182,033 ops/sec ±98,609% (1143144 runs sampled)
```

## matter

```text
front-matter × 99,246 ops/sec ±2,318% (95138 runs sampled)
gray-matter × 42,762 ops/sec ±1,157% (38132 runs sampled)
gray-matter+yaml_disabled × 75,143 ops/sec ±3,319% (61780 runs sampled)
raw-matter × 650,195 ops/sec ±34,268% (597205 runs sampled)
raw-matter+yaml × 104,844 ops/sec ±3,280% (100645 runs sampled)
```

## no-content

```text
front-matter × 99,236 ops/sec ±2,328% (90775 runs sampled)
gray-matter × 43,333 ops/sec ±1,034% (35812 runs sampled)
gray-matter+yaml_disabled × 74,289 ops/sec ±2,071% (61924 runs sampled)
raw-matter × 650,195 ops/sec ±33,799% (582713 runs sampled)
raw-matter+yaml × 123,808 ops/sec ±2,406% (114625 runs sampled)
```

## no-matter

```text
front-matter × 650,195 ops/sec ±33,799% (576310 runs sampled)
gray-matter × 79,758 ops/sec ±3,044% (66721 runs sampled)
gray-matter+yaml_disabled × 92,851 ops/sec ±7,322% (78654 runs sampled)
raw-matter × 866,551 ops/sec ±133,449% (723434 runs sampled)
raw-matter+yaml × 1,000,000 ops/sec ±132,697% (899453 runs sampled)
```
