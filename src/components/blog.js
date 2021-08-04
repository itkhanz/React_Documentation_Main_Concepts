function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) => 
                <li key = {post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map((post) => 
        <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            <div className="sectionDesc">
                <h2>Lists and Keys</h2>
                <ul>
                    <li>A “key” is a special string attribute you need to include when creating lists of elements.</li>
                    <li>Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity </li>
                    <li>Keys only make sense in the context of the surrounding array.</li>
                    <li>A good rule of thumb is that elements inside the map() call need keys.</li>
                    <li>Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique.</li>
                </ul>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{position: 'relative', marginRight:'10px'}}>
                    <h3>Sidebar</h3>
                    {sidebar}
                    <div style={{borderRight: '2px solid white', position: 'absolute',top: '0px', right:'-10px', height: '100%'}}></div>
                </div>
                {/* <hr /> */}
                <div style={{alignSelf:'flex-start', flexGrow: '1', marginLeft:'10px'}}>
                    <h3>Content</h3>
                    {content}
                </div>
            </div>

            <hr></hr>
        </div>

    );
}

export default Blog;