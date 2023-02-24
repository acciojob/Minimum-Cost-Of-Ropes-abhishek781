function minCostToConnectRopes(arr) {
  let heap = [];
  for (let i = 0; i < arr.length; i++) {
    heap.push(arr[i]);
  }

  // Build min heap
  heapify(heap);

  let cost = 0;

  // Merge ropes until only one rope remains
  while (heap.length > 1) {
    let rope1 = heapq.heappop(heap);
    let rope2 = heapq.heappop(heap);

    let mergedRope = rope1 + rope2;
    cost += mergedRope;

    heapq.heappush(heap, mergedRope);
  }

  return cost;
}

function heapify(arr) {
  let n = arr.length;

  // Build a max-heap by repeatedly sifting down
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    siftDown(arr, i, n);
  }
}

function siftDown(arr, i, n) {
  let leftChild = 2 * i + 1;
  let rightChild = 2 * i + 2;
  let maxIndex = i;

  if (leftChild < n && arr[leftChild] < arr[maxIndex]) {
    maxIndex = leftChild;
  }

  if (rightChild < n && arr[rightChild] < arr[maxIndex]) {
    maxIndex = rightChild;
  }

  if (maxIndex !== i) {
    let temp = arr[i];
    arr[i] = arr[maxIndex];
    arr[maxIndex] = temp;

    siftDown(arr, maxIndex, n);
  }
}
  
