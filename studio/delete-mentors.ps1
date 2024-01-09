# Run Sanity query to get document IDs
$rawJson = sanity documents query "*[_type == 'mentor'][0...20]._id" --output JSON
$ids = $rawJson | ConvertFrom-Json

# Debugging output
Write-Output $ids

# Iterate over document IDs and delete each document
foreach ($id in $ids) {
    sanity documents delete $id
}