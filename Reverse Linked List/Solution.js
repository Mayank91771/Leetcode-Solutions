var reverseList = function (head) {
  if (!head) return head;

  var prev = null;
  var curr = head;

  while (curr) {
    var next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
