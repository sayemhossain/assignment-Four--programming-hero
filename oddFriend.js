function oddFriend(friends) {
  for (const friend of friends) {
    if (friend.length == 0) {
      return "Invalid input";
    } else if (friend.length % 2 != 0) {
      return friend;
    }
  }
}
var friends = ["badhon", "shanto", "raju", "ullash", "utsho", "nayan", "tusar"];
const targetFriend = oddFriend(friends);
console.log(targetFriend);
