import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Image, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // Fetching data to an API
  const [postList, setPostList] = useState([])
  // Loading State
  const [isLoading, setIsLoading] = useState(true)
  // Pull to Refresh
  const [refreshing, setRefreshing] = useState(false)
  // Submitting data to an API
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")
  const [isPosting, setIsPosting] = useState(false)
  // Error Handling
  const [error, setError] = useState("")


  // Fetching data to an API
  const fetchData = async (limit = 10) => {
    // Error Handling
    try {
      // Fetching data to an API
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
        // Error Handling - for test
        // `https://jsonplaceholderfafdadsa.typicode.com/posts?_limit=${limit}`
      )
      const data = await response.json()
      setPostList(data)
      // Loading State
      setIsLoading(false)
      // Loading State - test to see loading animation
      // setIsLoading(true)

      // Error Handling
      setError("")
    } catch (error) {
      // Error Handling
      console.error("Error fetching data:", error)
      setIsLoading(false)
      setError("Failed to fetch post list")
    }

  }

  // Pull to Refresh
  const handleRefresh = () => {
    setRefreshing(true)
    fetchData(20)
    setRefreshing(false)
  }

  // Submitting data to an API
  const addPost = async () => {
    // Error Handling
    try {
      setIsPosting(true)
      const response = await fetch(
        // Submitting data to an API
        "https://jsonplaceholderfadfafds.typicode.com/posts", {
        // Error Handling - for test
        // "https://jsonplaceholderfadfafds.typicode.com/posts", {
        method: 'post',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody
        })
      }
      )
      const newPost = await response.json()
      setPostList([newPost, ...postList])
      setPostTitle("")
      setPostBody("")
      setIsPosting(false)
      setError("")
    } catch (error) {
      console.error("Error adding new post:", error)
      setError("Failed to fetch post list")
    }

  }

  // Fetching data to an API
  const data = useEffect(() => {
    fetchData()
  }, [])

  // Loading State
  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="0000ff" />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }
  return (
    // Fetching data to an API
    <SafeAreaView style={styles.container}>
      <>
        {/* Error Handling */}
        {
          error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : (
            <>
              {/* Submitting data to an API */}
              <View>
                <TextInput
                  style={styles.input}
                  placeholder='Post title'
                  value={postTitle}
                  onChangeText={setPostTitle}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Post body'
                  value={postBody}
                  onChangeText={setPostBody}
                />
                <Button
                  title={isPosting ? "Adding..." : "Add Post"}
                  // Submitting data to an API
                  onPress={addPost}
                  disabled={isPosting}
                />
              </View>
              <View style={styles.listContainer}>
                <FlatList
                  data={postList}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.card}>
                        <Text style={styles.titleText}>{item.title}</Text>
                        <Text style={styles.bodyText}>{item.body}</Text>
                      </View>
                    )
                  }}
                  ItemSeparatorComponent={() => { return <View style={{ height: 16 }} /> }}
                  ListEmptyComponent={<Text>No Posts Found</Text>}
                  ListHeaderComponent={<Text style={styles.headerText}>Posts List</Text>}
                  ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
                  // Pull to Refresh
                  refreshing={refreshing}
                  onRefresh={handleRefresh}
                />
              </View>
            </>
          )
        }
      </>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  titleText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 24,
    color: "#666666"
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 12
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8
  },
  errorContainer: {
    backgroundColor: "#FFC0CB",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  },
  errorText: {
    color: "#D8000C",
    fontSize: 16,
    textAlign: "center",
  },
})