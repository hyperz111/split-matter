# Benchmarks

> This benchmark is using different content (salted) in every iterations.

## complex

```text
front-matter × 4,528 ops/sec ±135% (417 runs sampled)
gray-matter × 3,792 ops/sec ±127% (371 runs sampled)
gray-matter+yaml_disabled × 11,083 ops/sec ±483% (993 runs sampled)
raw-matter × 180,571 ops/sec ±9,513% (12094 runs sampled)
raw-matter+yaml × 6,448 ops/sec ±101% (576 runs sampled)
```

## empty

```text
front-matter × 866,551 ops/sec ±133,449% (83508 runs sampled)
gray-matter × 116,077 ops/sec ±4,289% (9446 runs sampled)
gray-matter+yaml_disabled × 116,077 ops/sec ±4,289% (11004 runs sampled)
raw-matter × 1,083,424 ops/sec ±97,214% (111393 runs sampled)
raw-matter+yaml × 1,182,033 ops/sec ±98,609% (114703 runs sampled)
```

## matter

```text
front-matter × 95,584 ops/sec ±2,725% (7805 runs sampled)
gray-matter × 41,667 ops/sec ±1,043% (3495 runs sampled)
gray-matter+yaml_disabled × 65,325 ops/sec ±2,384% (5700 runs sampled)
raw-matter × 619,195 ops/sec ±53,904% (50398 runs sampled)
raw-matter+yaml × 125,000 ops/sec ±3,508% (11098 runs sampled)
```

## no-content

```text
front-matter × 99,236 ops/sec ±2,318% (9010 runs sampled)
gray-matter × 42,072 ops/sec ±1,117% (3749 runs sampled)
gray-matter+yaml_disabled × 73,866 ops/sec ±3,215% (6420 runs sampled)
raw-matter × 619,195 ops/sec ±64,799% (48891 runs sampled)
raw-matter+yaml × 125,000 ops/sec ±3,700% (10134 runs sampled)
```

## no-matter

```text
front-matter × 650,195 ops/sec ±33,799% (56385 runs sampled)
gray-matter × 96,293 ops/sec ±3,434% (8477 runs sampled)
gray-matter+yaml_disabled × 97,742 ops/sec ±3,812% (8591 runs sampled)
raw-matter × 813,008 ops/sec ±54,295% (70775 runs sampled)
raw-matter+yaml × 866,551 ops/sec ±54,203% (80841 runs sampled)
```
